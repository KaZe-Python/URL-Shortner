import React from 'react';
import HomeComponent from '../components/HomeContent';
import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';

const HomePage = () =>{
    return(
        <div>
            <TopMenu />
            <HomeComponent />
            <Footer />
        </div>
    );
};

export default HomePage;