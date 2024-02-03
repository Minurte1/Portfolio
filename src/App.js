import './App.css';
import Cursor from './public/component/cursor';
import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const containerNavbarShowRef = useRef(null);

  const toggleMenu = () => {
    console.log(showMenu)
    setShowMenu(!showMenu);
    // if (showMenu === false) {

    // }
  };

  const handleClickOutside = (event) => {
    if (containerNavbarShowRef.current && !containerNavbarShowRef.current.contains(event.target)) {
      // Nếu click ngoài container-NavbarShow, đặt showMenu về false
      if (showMenu === false) { setShowMenu(true); }

    }
  };

  useEffect(() => {
    console.log('useEffect ran');
    document.addEventListener('click', handleClickOutside);

    return () => {
      console.log('useEffect cleanup');
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    // Thêm hoặc bỏ lớp tối trên body khi showMenu thay đổi
    if (showMenu) {
      document.body.classList.remove('menu-closed');
    } else {
      document.body.classList.add('menu-closed');
    }
  }, [showMenu]);
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
            <a href=''>Home</a>
            <a href=''>About</a>
            <a href=''>Education</a>
            <a href=''>Skills</a>
            <a href=''>Projects</a>
            <a href=''>Work Experience</a>
            <a href=''>Projects</a>
          </div>
          <div className={`Navbar-right ${showMenu ? 'menu-open' : ''}`} onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
      <div className={`overlay ${showMenu ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`container-NavbarShow ${showMenu ? 'menu-open' : ''}`} ref={containerNavbarShowRef} >
        <a href='#'>Menu Item 1</a>
        <a href='#'>Menu Item 2</a>
        <a href='#'>Menu Item 3</a>
      </div>
    </>
  );
};

export default App;
