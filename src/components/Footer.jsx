import React from 'react';

//files
import './Footer.scss';
import codeIcon from './img/Icons/code-icon.svg';
import heartIcon from './img/Icons/heart-icon.svg';

export default function Footer() {
    return (
        <div id="footer">
            <img src={codeIcon} className="footer-icons" />
            <p className="footerp">With</p>
            <img src={heartIcon} className="footer-icons" />
            <p className="footerp">By</p>
            <h1 className="footerh1">Itai Hammer 2020</h1>
            <a
                href="https://github.com/ItaiHammer/website"
                target="blank"
                className="footera"
            >
                GitHub Page
            </a>
        </div>
    );
}
