import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

//files
import './AboutMe.scss';
import logoBackground from './img/logo-background.png';
import circleIcon from './img/Icons/circle-icon.svg';

export default function AboutMe() {
    const [aboutMeAnimation, setAboutMeAnimation] = useState(false);
    const aboutVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 2 },
        },
    };

    useEffect(() => {
        if (aboutMeAnimation === true) {
            setTimeout(() => {
                setAboutMeAnimation(false);
            }, 200);
        }
    }, [aboutMeAnimation]);

    return (
        <motion.div
            variants={aboutVariants}
            initial="initial"
            animate="animate"
            id="about-me"
        >
            <div className="about-me-title-container">
                <h1 className="about-me-title">About</h1>
                <h1
                    className="about-me-title"
                    id="purple"
                    onClick={() => {
                        setAboutMeAnimation(true);
                    }}
                    style={{ userSelect: 'none ', cursor: 'pointer' }}
                >
                    Me
                </h1>
                <img src={circleIcon} className="about-circle-icon"></img>
                <p className="about-click-me-text">Click Me!</p>
            </div>

            <div className="about-me-about">
                <div className="about-me-text-container">
                    <p className="about-me-text">My name is</p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Itai Hammer
                    </motion.p>
                    <p className="about-me-text">I am</p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        15
                    </motion.p>
                    <p className="about-me-text">years old.</p>
                    <p className="about-me-text">I am into</p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Programming,
                    </motion.p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Video Editing,
                    </motion.p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        3D Modeling,
                    </motion.p>
                    <p className="about-me-text">and</p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Photoshop.
                    </motion.p>
                    <p className="about-me-text">
                        I've been living in California for
                    </p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        4
                    </motion.p>
                    <p className="about-me-text"> years</p>
                    <p className="about-me-text"> and am in</p>
                    <motion.p
                        className="about-me-text"
                        id="purple"
                        animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        10th
                    </motion.p>
                    <p className="about-me-text"> grade.</p>
                </div>
                <motion.img
                    src={logoBackground}
                    animate={{ scale: aboutMeAnimation ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => {
                        setAboutMeAnimation(true);
                    }}
                    className="about-me-logo"
                ></motion.img>
            </div>
            <br id="my-work2" />
        </motion.div>
    );
}
