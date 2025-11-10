import { RouterProvider } from "react-router"
import Router from "./router/Router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
 const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={Router} />
    </QueryClientProvider>
  )


}

export default App
