import {
    createBrowserRouter,
    RouterProvider,
    redirect,
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AnnotationPage from './pages/AnnotationPage.jsx';
import { fetchMusicToBeAnnotated, fetchUserStats } from './utils/fetchData.js';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        loader: async ({ request }) => {
            // loaders can be async functions
            // console.log('request.signal:', request.signal);
            const res = await fetch(`./login`, {
                method: 'POST',
                signal: request.signal,
                headers: {
                    'Access-Control-Allow-Credentials': true,
                },
                credentials: 'include',
            });

            const data = await res.json();
            if (data.hasExistingSession) return redirect('/annotation');
            return null;
        },
        errorElement: <ErrorPage message={'Something went horribly wrong.'} />,
    },
    {
        path: '/annotation',
        element: <AnnotationPage />,
        loader: async ({ request }) => {
            const [musicData, userData] = await Promise.all([
                fetchMusicToBeAnnotated(),
                fetchUserStats(),
            ]);
            const res = await fetch(`./login`, {
                method: 'POST',
                signal: request.signal,
                headers: {
                    'Access-Control-Allow-Credentials': true,
                },
                credentials: 'include',
            });

            const data = await res.json();
            return {
                musicData,
                userData,
                hasExistingSession: data.hasExistingSession,
            };
        },
        errorElement: <ErrorPage message={'Something went horribly wrong.'} />,
    },
    {
        path: '*',
        element: <ErrorPage message={'Page not found.'} />,
        errorElement: <ErrorPage message={'Something went horribly wrong.'} />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
