import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Games from '../pages/Games';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/games",
        element: <Games />
      }
    ]
  }
]);

export default router;
