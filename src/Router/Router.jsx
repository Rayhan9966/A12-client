import {
  createBrowserRouter

} from "react-router-dom";
import Main from "../layout/Main";
// import Home from "../Page/Home/Home";
import Login from "../Page/Login";
// import SignUp from "../Page/SignUp";
import About from "../Page/About";
import Contact from "../Page/Contact";
import NavBar from "../layout/shared/NavBar";
import Home from "../Page/Home/Home";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: "/",
        element: <NavBar></NavBar>
      }, 
      {
        path: "/home",
        element: <Home></Home>
      }, 
        {
        path: "/login",
        element: <Login></Login>
      }, 
      // {
      //   path: "/signup",
      //   element: <SignUp></SignUp>
      // },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
      
    ]
  }
]);