import { createBrowserRouter } from 'react-router-dom';

import PublicLayouts from '../layouts/PublicLayouts'; 
import { Home, About, NotFound, Services, Clients, People, Contact, News, Founders, SinglePost, PrivacyPolicy, CookiePolicy } from '../pages';

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
        path: 'services/:idPost',
        element: <SinglePost postType='services' />
      },
      {
        path: 'people',
        element: <People />,
      },
      {
        path: 'people/:id',
        element: <Founders />,
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
        path: 'news/:idPost',
        element: <SinglePost postType='news' />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }, 
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'cookie-policy',
        element: <CookiePolicy />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
export default routes;