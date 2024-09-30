import { RouterProvider } from "react-router-dom";
import routes from './routes/Routes';
import './assets/styles/style.scss';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;
