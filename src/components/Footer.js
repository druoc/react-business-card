import React from 'react';
import facebook from './img/facebook-logo.png';
import twitter from './img/twitter-logo.png';
import instagram from './img/instagram-logo.png';
import github from './img/github-logo.png';

const Footer = () => {
    return (
        <footer>
            <img className="logos" src={facebook} />
            <img className="logos" src={twitter} />
            <img className="logos" src={instagram} />
            <img className="logos" src={github} />
        </footer>
    )
}

export default Footer;