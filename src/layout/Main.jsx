import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Banner from '../Page/Home/Banner';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Main;