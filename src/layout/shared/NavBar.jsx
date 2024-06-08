
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { Button } from 'antd';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Page/Provider/AuthProvider';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    const {user,logOut}= useContext(AuthContext);
    const handleLogOut=()=>{
logOut()
.then(() => { })
.catch(error => console.log(error));




    }
    return (
        <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon></MenuIcon> */}
          </IconButton>
     <div className='fixed flex z-10 bg-opacity-30 '>
     <h1 className='font-bold'>BdMATRIMONY</h1>
        <div className=' flex justify-evenly ml-50 '>
        
      <div className='flex gap-4 ml-80 font-bold'>
      {user && <>
        <Link to='/dashboard'><h1>DashBoard</h1></Link>
        
        </>}
      <Link to='/home'><h1>Home</h1></Link>
       <Link to='/about'><h1>About</h1></Link>
       <Link to='/contact'><h1>Contact</h1></Link>
       <Link to='/biodata'><h1>BioData</h1></Link>
      
       <Link to='/history'><h1>History</h1></Link>
      
      {user && <> <Link to='/alldata'><h1>All Data</h1></Link></>}

       
      </div>
     
          
        </div>
      {
        user? <>
       <Link to='/home'> <button onClick={handleLogOut} className="px-6 py-2 ml-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Logout
        </button></Link></> : <>
        <li><Link to='/login'>Login</Link></li></>
      }
     </div>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default NavBar;