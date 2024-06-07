
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
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
     <div className='fixed flex z-10 bg-opacity-30 bg-base-100'>
     <h1 className='font-bold'>BdMATRIMONY</h1>
        <div className=' flex justify-evenly ml-50 '>
        
      <div className='flex gap-4 ml-80 font-bold'>
      <Link to='/dashboard'><h1>DashBoard</h1></Link>
      <Link to='/home'><h1>Home</h1></Link>
       <Link to='/about'><h1>About</h1></Link>
       <Link to='/contact'><h1>Contact</h1></Link>
       <Link to='/biodata'><h1>BioData</h1></Link>
      
       <Link to='/history'><h1>History</h1></Link>
       {/* <Link to='/femaledata'><h1>Female Data</h1></Link>
       <Link to='/maledata'><h1>Male Data</h1></Link> */}
       <Link to='/alldata'><h1>All Data</h1></Link>

       
      </div>
     
          
        </div>
       <div className='ml-20'><Link to='/login'> <Button className='mr-70' color="inherit">Login</Button></Link></div>
     </div>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default NavBar;