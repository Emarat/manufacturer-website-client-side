import React from 'react';
import Banner from './Banner';
import Tool from './Tool';
import BusinessSummery from './BusinessSummery';
import HundredHandTools from './HundredHandTools';
import NewsLetter from './NewsLetter';
import Review from './Review';

const Home = () => {
    return (
        <>

            <Banner></Banner>
            <Tool></Tool>
            <HundredHandTools></HundredHandTools>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <NewsLetter></NewsLetter>
        </>
    );
};

export default Home;