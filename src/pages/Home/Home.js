import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import OurProducts from './OurProducts';

const Home = () => {
    return (
        <div className='py-12'>
            <Banner></Banner>
            <OurProducts></OurProducts>


            <Footer></Footer>

        </div>
    );
};

export default Home;