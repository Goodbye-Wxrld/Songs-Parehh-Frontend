import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Homepage.jsx';
import AnnotationPage from './pages/AnnotationPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/annotation',
        element: <AnnotationPage />,
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
