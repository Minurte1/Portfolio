import './App.css';
import Cursor from './public/component/cursor';
import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
// import 'animate.css/animate.min.css'; // Import CSS của thư viện animate.css (được sử dụng bởi react-animate-on-scroll)
const App = () => {
  const [showMenu, setShowMenu] = useState(false);


  const toggleMenu = () => {
    console.log('Before toggle:', showMenu);
    setShowMenu(!showMenu);
    console.log('After toggle:', showMenu);
  };

  return (
    <>

      <Cursor></Cursor>
      <div className={`container-Navbar`}>
        <div className='Navbar'>
          <div className='Navbar-left'>
            <img src={require('../src/public/image/logo512.png')} className='img-logoreact' alt='Logo'></img>
            <p className='text-logo'>Hoàng Phúc</p>
          </div>
          <div className='Navbar-middle'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#education'>Education</a>
            <a href='#skill'>Skills</a>
            <a href='#project'>Projects</a>
            <a href='#experience'>Work Experience</a>
            {/* <a href='#project'>Projects</a> */}
          </div>
          <div className={`Navbar-right`}>
            <i className={`fa-solid fa-bars  ${showMenu ? 'menu-open' : ''}`} onClick={toggleMenu}></i>
          </div>
        </div>
      </div>
      <div className={`overlay ${showMenu ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`container-NavbarShow ${showMenu ? 'menu-open' : ''}`}>
        <p>Menu Item 1</p>
        <p>Menu Item 2</p>
        <p>Menu Item 3</p>
      </div>

      {/* <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p> <p>àhuas</p> <p>àhuas</p> <p>àhuas</p> */}
      <img src={require('./public/image/banner-scaled.jpg')} alt="Banner" />

      <section id='home'>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={2} animateOnce={true}>
          <h1>Hello, Animated on Scroll!</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" duration={1} animateOnce={true}>
          <p>This is a sample text with scroll animation.</p>
        </ScrollAnimation>
      </section>
      <section id='about'></section>
      <section id='education'></section>
      <section id='skill'></section>
      <section id='about'></section>
    </>
  );
};

export default App;
