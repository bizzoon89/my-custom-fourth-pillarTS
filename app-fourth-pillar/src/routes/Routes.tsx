import { createBrowserRouter } from 'react-router-dom';

import PublicLayouts from '../layouts/PublicLayouts'; 
import { Home, About, NotFound, Services, Clients, People, Contact, News } from '../pages';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayouts />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'people',
        element: <People />,
      },
      {
        path: 'clients',
        element: <Clients />,
      },
      {
        path: 'news',
        element: <News />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;