import { RouterProvider } from "react-router"
import Router from "./router/Router"
import ScrollToTop from "./components/ScrollToTop"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient();
function App() {

  return (
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={Router} />
    </QueryClientProvider>
  )


}

export default App
