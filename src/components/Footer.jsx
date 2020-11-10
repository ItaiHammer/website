import React from 'react';

//files
import './Footer.css';

export default function Footer () {
    return (<div id="footer" >

        <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/code-512.png" className="footer-icons" />
        <p className="footerp" >With</p>
        <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/80-512.png" className="footer-icons" />
        <p className="footerp" >By</p>
        <h1 className="footerh1" >Itai Hammer</h1>
        <a href="https://github.com/ItaiHammer/website" target="blank" className="footera" >GitHub Page</a>
    </div>);
}