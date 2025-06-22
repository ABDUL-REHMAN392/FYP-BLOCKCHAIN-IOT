import Dashboard from "./pages/Dashboard";
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./UI/Layout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
