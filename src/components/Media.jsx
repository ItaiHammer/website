import React from 'react';
import { motion } from 'framer-motion';

//files
import './Media.scss';

export default function Media() {
    return (
        <div id="media">
            <div className="media-title-container">
                <h1 className="media-title">My</h1>
                <h1 className="media-title" id="green">
                    Media
                </h1>
            </div>
            <div className="media-buttons-container"></div>
        </div>
    );
}
