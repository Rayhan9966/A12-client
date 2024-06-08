import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer';
import Banner from '../Page/Home/Banner';
// import Home from '../Page/Home/Home';
import NavBar from './shared/NavBar';
import History from '../Page/History';
import BioData from '../Page/BioData';

const Main = () => {
    const location =useLocation();
    console.log(location);
    const noHeaderFooter= location.pathname.includes('login')
    return (
        <div>
         { noHeaderFooter||  <NavBar></NavBar>}
            <Outlet></Outlet>
            {/* <Banner></Banner>
            
            <History></History>
            <BioData></BioData> */}
            { noHeaderFooter|| <Footer></Footer>}
        </div>
    );
};

export default Main;