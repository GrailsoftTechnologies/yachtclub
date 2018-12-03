import React, { Component } from 'react';
import ParallaxPage from './components/ParallaxPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.css';

import Logo from './img/newbarlogo.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar background="black" text="#e3d83b" hovercolor="#fffdde" logo={Logo}/>
        <ParallaxPage background="black" text="#e3d83b" hovercolor="#fffdde" />
        <Footer background="black" text="#e3d83b" hovercolor="#fffdde"/>
      </div>
    );
  }
}

export default App;
