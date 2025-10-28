import { RouterProvider } from "react-router"
import Router from "./router/Router"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (<>      <ScrollToTop />
    <RouterProvider router={Router} />
  </>)


}

export default App
