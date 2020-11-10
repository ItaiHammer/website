import React, { useState, useEffect } from 'react';
import './App.css';

//components
import Header from './components/Header';
import Body from './components/Body';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('#00AAFF');
  const y = 'window.scrollY';

  return (<div className="app-body" >
    <Header theme={theme} setTheme={setTheme} />
    <Body theme={theme} setTheme={setTheme} />
    <AboutMe/>
    {/* <MyWork/> */}
    <Footer/>
  </div>);
}

export default App;
