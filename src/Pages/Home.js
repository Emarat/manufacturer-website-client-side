import React from 'react';
import Banner from './Banner';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
        </>
    );
};

export default Home;