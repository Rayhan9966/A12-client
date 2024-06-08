import { FaDatabase, FaEdit, FaPhone, FaUser} from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";


const DashBoard = () => {
    const {user,logOut}= useContext(AuthContext);
    const handleLogOut=()=>{
logOut()
.then(() => { })
.catch(error => console.log(error));
    }
    // const [cart] = useCart();

    // // TODO: get isAdmin value from the database
    // const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu p-4">
                    {/* {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart ({cart.length})</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li>
                            </>
                    } */}
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/dashboard/editbiodata">
                            <FaEdit></FaEdit>
                            Edit Biodata</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/ View Biodata">
                            <FaDatabase></FaDatabase>
                            View Biodata</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contact">
                            <FaPhone></FaPhone>
                            Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/contact">
                            <FaDatabase></FaDatabase>
                            Favourite BioData</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/home">
                            <FaEnvelope></FaEnvelope>
                            Logout</NavLink>
                    </li> */}
                  
                    
                         
                         
                       {     user?
                          <>
                         <NavLink to='/home'> <button onClick={handleLogOut} className="px-6 py-2 ml-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-900 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Logout
                          </button></NavLink></> :<></>}


                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;