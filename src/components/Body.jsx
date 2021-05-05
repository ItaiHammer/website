import React, { useEffect } from 'react';
import { animate, motion } from 'framer-motion';

//files
import './Body.scss';
import arrowIcon from './img/Icons/arrow-icon.svg';
import clickMeIcon from './img/Icons/click-me-icon.svg';
import designIcon from './img/Icons/design-icon.svg';

export default function Body({ theme, setTheme, isPhone }) {
    const homeVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        },
    };
    const titleVariants = {
        hover: {
            scale: 1.02,
            color: theme,
        },
        click: {
            color: ['#0151FF', '#FFCB07', '#00D872', '#FF264D', '#00AAFF'],
            transition: { duration: 1, yoyo: Infinity },
        },
        transition: {
            duration: 2,
        },
    };

    useEffect(() => {
        for (let i = 0; i < 1; i++) {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }, 100);
        }
    }, []);

    return (
        <motion.div
            id="home"
            variants={homeVariants}
            initial="initial"
            animate="animate"
        >
            <motion.h1
                variants={titleVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="click"
                transition="transition"
                className="title"
            >
                Itai Hammer.
            </motion.h1>
            <div className="description-container">
                <p className="description">
                    Programming • Video Editing • 3D Modeling • Photoshopping
                </p>
                <img src={clickMeIcon} className="click-me-icon"></img>
                <p className="click-me-text">Long Click Me!</p>
            </div>
            <motion.a
                id="about-me2"
                href={isPhone ? '#about-me2' : '#about-me'}
                whileHover={{ scale: 1.05 }}
            >
                <button
                    className="view-work-button"
                    style={{ background: theme }}
                >
                    About Me
                    <img
                        src={arrowIcon}
                        alt="About Me"
                        className="my-work-button-icon"
                    />
                </button>
            </motion.a>
            <img src={designIcon} className="home-design-icon"></img>
        </motion.div>
    );
}
