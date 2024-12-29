import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";

const appRouter = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
      {/* <Navbar></Navbar> */}
    </>
  );
}

export default App;
