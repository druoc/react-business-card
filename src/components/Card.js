import React from 'react';
import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

const Card = () => {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default Card;