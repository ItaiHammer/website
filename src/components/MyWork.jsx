import React from 'react';
import { motion } from 'framer-motion';

//files
import './MyWork.css';

export default function MyWork () {
    const workVariants = {
        initial: {
            opacity: 0,
            y: 100
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {duration: 2}
        },
    }

    return (<motion.div variants={workVariants} initial="initial" animate="animate" id="my-work" >
        <div className="title-container">
            <h1 className="my-work-title" >My</h1>
            <h1 className="my-work-title" style={{color: '#FFCC00',userSelect: 'none' , cursor: 'pointer'}}>Work</h1>
        </div>
        <div className="work-popup-container">
            <div className="work-popup"></div>
            <div className="work-popup"></div>
        </div>
        <br/><br/>
    </motion.div>);
}