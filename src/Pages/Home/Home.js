import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Tool from './Tool';
import BusinessSummery from './BusinessSummery';
import HundredHandTools from './HundredHandTools';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Banner></Banner>
            <Tool></Tool>
            <HundredHandTools></HundredHandTools>
            <BusinessSummery></BusinessSummery>
            <Footer></Footer>
        </>
    );
};

export default Home;