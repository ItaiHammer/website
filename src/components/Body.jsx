import React, { useEffect } from 'react';
import { animate, motion } from 'framer-motion';

//files
import './Body.css';

export default function Body ({ theme, setTheme }) {
    const homeVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {duration: 1}
        },
    }
    const titleVariants = {
        hover: {
            scale: 1.02,
            color: theme
        },
        click: {
            color: [ '#0151FF', '#FFCB07', '#00D872', '#FF264D', '#00AAFF'],
            transition: { duration: 1, yoyo: Infinity }
        },
        transition: {
            duration: 2
        }
    }

    useEffect(()=>{
        for (let i = 0; i < 1; i++) {
            setTimeout(() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }, 100);
        }
    }, []);

    return (<motion.div id="home" variants={homeVariants} initial="initial" animate="animate" >
        <motion.h1 variants={titleVariants} initial="initial" animate="animate" whileHover="hover" whileTap="click" transition="transition" className="title" >Itai Hammer.</motion.h1>
        <div className="description-container">
            <p className="description" >Programming • Video Editing • 3D Modeling • Photoshopping</p>
            <div className="click-me-icon"></div>
            <p className="click-me-text" >Long Click Me!</p>
        </div>
        <motion.a href="#about-me" whileHover={{scale: 1.05}} ><button className="view-work-button" style={{background: theme}} >About Me <img src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png" alt="About Me" className="my-work-button-icon" /> </button></motion.a>
        <div className="home-design-icon" ></div>
    </motion.div>);
};