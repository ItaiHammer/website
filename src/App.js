import React, { useState, useEffect } from 'react';
import './App.css';

//components
import Header from './components/Header';
import Body from './components/Body';
import MyWork from './components/MyWork';

function App() {
  const [theme, setTheme] = useState('#00AAFF');
  const y = 'window.scrollY';

  return (<div className="app-body" >
    <Header theme={theme} setTheme={setTheme} />
    <Body theme={theme} setTheme={setTheme} />
    {/* <MyWork/> */}
  </div>);
}

export default App;
