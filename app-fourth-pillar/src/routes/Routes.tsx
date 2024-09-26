import { createBrowserRouter } from "react-router-dom";

import PublicLayouts from "../layouts/PublicLayouts"; 
import { Home, About, Contact } from '../pages';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
]);

export default routes;