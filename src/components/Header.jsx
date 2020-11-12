import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

//files
import './Header.css';

export default function Header ({ theme, setTheme, isPhone }) {
    const headerVariants = {
        initial: {
            y: -100
        },
        animate: {
            y: 0,
            transition: {duration: 2, when: 'beforeChildren', staggerChildren: 0.3}
        }
    }
    let headerLinks = [
        {
            text: 'Home',
            href: '#home',
            click: ()=>{setTheme("#00AAFF")}
        },
        {
            text: 'About Me',
            href: isPhone ? '#about-me2' : '#about-me',
            click: ()=>{setTheme("#9562FF")}
        },
        {
            text: 'My Work',
            href: isPhone ? '#my-work2' : '#my-work',
            click: ()=>{setTheme("#FFCC00")}
        },
        {
            text: 'Media',
            href: isPhone ? '#media' : '#media2'
        },
        {
            text: 'Contact',
            href: '#',
            color: theme
        }
    ];

    return (<motion.div variants={headerVariants} initial="initial" animate="animate" className="header">
        {headerLinks.map(element => {
                return <a href={element.href} onClick={element.click} className="header-links" style={{color: element.color != null ? element.color : 'grey'}} >{element.text}</a>
        })}
    </motion.div>);
}