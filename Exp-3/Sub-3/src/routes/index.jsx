import { createBrowserRouter, Navigate } from 'react-router-dom';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/profile" replace />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default router;
