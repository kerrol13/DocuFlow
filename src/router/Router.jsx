import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Steps from "../pages/guides/Steps";
import Developers from "../pages/guides/Developers";
import AddNewProcess from "../pages/guides/AddNewProcess";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true, path: "/documentation/guide/:id", element: <Steps />,
      },
      {
        path: "/documentation/dev/:id", element: <Developers />,
      },

    ],
  },
  {
    path: "/documentation/generate-process", element: <AddNewProcess />,
  },

]);
export default Router