import React from 'react';

//files
import './MyWork.css';

export default function MyWork () {
    return (<div id="my-work" >
        <div className="title-container">
            <h1 className="my-work-title" >My</h1>
            <h1 className="my-work-title" style={{color: '#9562FF'}}>Work</h1>
        </div>
        <div className="work-popup">
            <div src=".\img\among-us-note-taker-screenshot.png" style={{background: 'url("./img/among-us-note-taker-screenshot.png") center center no-repeat'}} className="work-popup-preview" ></div>
        </div>
        <br/><br/>
    </div>);
}