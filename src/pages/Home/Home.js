import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import OurProducts from './OurProducts';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <OurProducts></OurProducts>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>

        </div>
    );
};

export default Home;