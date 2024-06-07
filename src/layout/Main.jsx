import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Banner from '../Page/Home/Banner';
// import Home from '../Page/Home/Home';
import NavBar from './shared/NavBar';
import History from '../Page/History';
import BioData from '../Page/BioData';

const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
            <Outlet></Outlet>
            {/* <Banner></Banner>
            
            <History></History>
            <BioData></BioData> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;