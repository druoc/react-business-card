import React from 'react';
import img from './img/dave.jpg';

const Info = () => {
    return (
        <div className="info-section">
            <img className="main-image" src={img} />
            <div className="details">
                <h1>Dave Ruocco</h1>
                <h3>Fullstack Developer</h3>
                <h5>https://github.com/druoc</h5>
            </div>
            <div className="btn-container">
                <button>📩 E-mail</button>
                <button className="linkedin-btn">LinkedIn</button>
            </div>
        </div>
    )
};

export default Info;