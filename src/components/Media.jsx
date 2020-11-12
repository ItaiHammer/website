import React from 'react';
import { motion } from 'framer-motion';

//files
import './Media.css';

export default function Media () {
    return (<div id="media" >
        <div className="media-title-container">
            <h1 className="media-title" >My</h1>
            <h1 className="media-title" id="green" >Media</h1>
        </div>
        <div className="media-buttons-container">
        <button className="media-buttons1" >Instagram</button>
        <button className="media-buttons2" >Twitch</button>
        <button className="media-buttons1" >Youtube</button>
        <button className="media-buttons2" >TikTok</button>
        <button className="media-buttons1" >Discord</button>
        <button className="media-buttons2" >FaceBook</button>
        <button className="media-buttons1" >SnapChat</button>
        <button className="media-buttons2" >GitHub</button>
        </div>
    </div>);
}