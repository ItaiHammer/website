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
            transition: {duration: 3}
        },
    }

    return (<motion.div variants={workVariants} initial="initial" animate="animate" id="my-work" >
        <div className="title-container">
            <h1 className="my-work-title" >My</h1>
            <h1 className="my-work-title" style={{color: '#FFCC00',userSelect: 'none' , cursor: 'pointer'}}>Work</h1>
        </div>
        <div className="work-popup-container">
            <div className="work-popup-rows">
                <motion.div whileHover={{y: -50}} transition={{type: 'spring', mass: 2, damping: 15}} className="work-popup">
                    <div className="work-popup-placeholder">
                        <h1 className="work-title" >3D MODELING</h1>
                    </div>
                    <div className="work-popup-3d-model-preview" ></div>
                </motion.div>
                <motion.div whileHover={{y: -50}} transition={{type: 'spring', mass: 2, damping: 15}} className="work-popup">
                    <div className="work-popup-placeholder">
                        <h1 className="work-title" >PROGRAMMING</h1>
                    </div>

                    <iframe src="https://codesandbox.io/embed/floral-monad-1126f?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
                    className="work-iframe"
                    ></iframe>
                </motion.div>
            </div>
            <div className="work-popup-rows">
                <motion.div whileHover={{y: -50}} transition={{type: 'spring', mass: 2, damping: 15}} className="work-popup">
                    <div className="work-popup-placeholder">
                        <h1 className="work-title" >VIDEO EDITING</h1>
                    </div>
                    <video className="work-iframe" controls>
                        <source src="\my-work\video.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
                <motion.div whileHover={{y: -50}} transition={{type: 'spring', mass: 2, damping: 15}} className="work-popup">
                    <div className="work-popup-placeholder">
                        <h1 className="work-title" >PHOTOSHOPPING</h1>
                    </div>
                    <div className="work-popup-photoshop-preview" ></div>
                </motion.div>
            </div>
        </div>
        <br/><br/>
    </motion.div>);
}