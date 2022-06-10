import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurProducts from './OurProducts';
import Review from './Review';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <OurProducts></OurProducts>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Footer></Footer>

        </div>
    );
};

export default Home;