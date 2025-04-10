import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import User from "../pages/User";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/users",
        element:<User></User>
      },
      {
        path: "/button",
        element:<div>Button</div>
      },
      {
        path: "/login",
        element:<div>Login</div>
      },
      {
        path: "/singup",
        element:<div>singup</div>
      }
    ]
  },
]);


export default router;