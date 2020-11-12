import React, { useState, useEffect } from 'react';
import './App.css';

//components
import Header from './components/Header';
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('#00AAFF');
  const isPhone = window.screen.width < 750;

  window.onscroll = ()=>{
    if (isPhone === false) {
      if (window.scrollY > 0 && window.scrollY < 700) {
        setTheme('#00AAFF');//blue
      }else if (window.scrollY > 700 && window.scrollY < 1500) {
        setTheme('#9562FF');//purple
      }else if (window.scrollY > 1500) {
        setTheme('#FFCC00');//yellow
      }
    }else {
      if (window.scrollY > 0 && window.scrollY < 480) {
        setTheme('#00AAFF');//blue
      }else if (window.scrollY > 480 && window.scrollY < 900) {
        setTheme('#9562FF');//purple
      }else if (window.scrollY > 900) {
        setTheme('#FFCC00');//yellow
      }
    }
  };

  useEffect(()=>{
    console.log(isPhone);
    console.log(window.screen.width);
  }, []);

  return (<div className="app-body" >
    <Header theme={theme} setTheme={setTheme} isPhone={isPhone} />
    <Body theme={theme} setTheme={setTheme} />
    <AboutMe/>
    <MyWork/>
    {/* <Media/> */}
    {/* <Contact/> */}
    <Footer/>
  </div>);
}

export default App;
