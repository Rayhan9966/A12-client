import {
  createBrowserRouter

} from "react-router-dom";
import Main from "../layout/Main";
// import Home from "../Page/Home/Home";
import Login from "../Page/Login";
import SignUp from "../Page/SignUp";
import About from "../Page/About";
import Contact from "../Page/Contact";
// import NavBar from "../layout/shared/NavBar";
import Home from "../Page/Home/Home";
import BioData from "../Page/BioData";
import History from "../Page/History";
import FemaleData from "../Page/Data/FemaleData";
import MaleData from "../Page/Data/MaleData";
import AllData from "../Page/Data/AllData";
import ViewDetails from "../Page/Home/ViewDetails";
import PrivateRoute from "./ProtectectedRoute/PrivateRoute";
import DashBoard from "../Page/DashBoard/DashBoard";
import EditBiodata from "../Page/DashBoard/EditBiodata";
// import Register from "../Page/Register";
// import Registration from "../Page/Registration";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Main></Main>,
    children: [

      // {
      //   path: "/",
      //   element: <NavBar></NavBar>
       
      // }, 
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <DashBoard></DashBoard>
        </PrivateRoute>
      }, 

      {
        path: "/home",
        element: <Home></Home>
      }, 
        {
        path: "/login",
        element: <Login></Login>
      }, 
      //   {
      //   path: "/registration",
      //   element: <Registration></Registration>
      // }, 
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/viewdetails",
        element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>
      },
      {
        path: "/biodata",
        element: <BioData></BioData>
      },
      {
        path: "/history",
        element: <History></History>
      },
      {
        path: "/femaledata",
        element: <FemaleData></FemaleData>
      },
      {
        path: "/maledata",
        element: <MaleData></MaleData>
      },
      {
        path: "/alldata",
        element: <AllData></AllData>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
      
    ]
  },
  {
    
      path: "/dashboard",
      element: <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ,
    children:[

      {
        path:'editbiodata',
        element:<EditBiodata></EditBiodata>
      }
    ]
  }
]);