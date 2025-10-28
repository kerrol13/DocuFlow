import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import LMSteps from "../pages/guides/loan-management/Steps";
import LMDevelopers from "../pages/guides/loan-management/Developers";
import NSSSteps from "../pages/guides/new-shift-schedule/Steps";
import NSSDevelopers from "../pages/guides/new-shift-schedule/Developers";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true, path: "/loan-management/guide", element: <LMSteps />,
        handle: { title: "Loan Management - Guide", guide: "/loan-management/guide", dev: "/loan-management/dev" }
      },
      {
        path: "/loan-management/dev", element: <LMDevelopers />,
        handle: { title: "Loan Management - Developers", guide: "/loan-management/guide", dev: "/loan-management/dev" }
      },
            {
        index: true, path: "/new-shift-schedule/guide", element: <NSSSteps />,
        handle: { title: "New Shift Schedule - Guide", guide: "/new-shift-schedule/guide", dev: "/new-shift-schedule/dev" }
      },
      {
        path: "/new-shift-schedule/dev", element: <NSSDevelopers />,
        handle: { title: "New Shift Schedule - Developers", guide: "/new-shift-schedule/guide", dev: "/new-shift-schedule/dev" }
      },
    ],
  },

]);
export default Router