import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AnnotationPage from './pages/AnnotationPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        loader: async ({ request }) => {
            // loaders can be async functions
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/login`,
                    {
                        method: 'POST',
                        signal: request.signal,
                        credentials: 'include',
                    }
                );
                return await res.json();
            } catch (err) {
                console.error(err);
            }
            return null;
        },
        // errorElement: <div>oopsies</div>,
    },
    {
        path: '/annotation',
        element: <AnnotationPage />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
