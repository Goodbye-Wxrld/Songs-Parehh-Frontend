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
            console.log('request.signal:', request.signal);
            const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
                method: 'POST',
                signal: request.signal,
                credentials: 'include',
            });

            const data = await res.json();
            if (data.hasExistingSession) return redirect('/annotation');
            return null;
        },
        errorElement: <ErrorPage />,
    },
    {
        path: '/annotation',
        element: <AnnotationPage />,
        loader: async ({ request }) => {
            const musicData = await fetchMusicToBeAnnotated();
            const userData = await fetchUserStats();
            return { musicData, userData };
        },
        errorElement: <ErrorPage />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
