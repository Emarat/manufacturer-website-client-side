import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Tool from './Tool';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tool></Tool>
            <Footer></Footer>
        </>
    );
};

export default Home;