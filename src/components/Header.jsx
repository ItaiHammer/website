import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';

//files
import './Header.css';

export default function Header ({ theme }) {
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
            href: '#home'
        },
        {
            text: 'About Me',
            href: '#about-me'
        },
        {
            text: 'My Work',
            href: '#my-work'
        },
        {
            text: 'Support',
            href: '#'
        },
        {
            text: 'Contact',
            href: '#',
            color: theme
        }
    ];

    return (<motion.div variants={headerVariants} initial="initial" animate="animate" className="header">
        {headerLinks.map(element => {
                return <a href={element.href} className="header-links" style={{color: element.color != null ? element.color : 'grey'}} >{element.text}</a>
        })}
    </motion.div>);
}