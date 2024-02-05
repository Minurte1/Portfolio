import './App.css';
// import Cursor from './public/component/cursor';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
// import ScrollAnimation from 'react-animate-on-scroll';
// import 'animate.css/animate.min.css'; // Import CSS của thư viện animate.css (được sử dụng bởi react-animate-on-scroll)
const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [speed, setSpeed] = useState(2);
  useEffect(() => {
    const intervalId = setInterval(() => {

    }, speed); return () => clearInterval(intervalId);
  }, [speed]);

  window.onload = function () {

    const text = document.querySelector(".sec-text");
    if (text) {
      const load = () => {
        setTimeout(() => {
          text.textContent = "Web Developer";

        }, 0)
        setTimeout(() => {
          text.textContent = "Web Frontend";

        }, 5900)
        setTimeout(() => {
          text.textContent = "Web Backend";

        }, 11900)
      }
      load();
      setInterval(load, 12000)
    } else {
      console.error("Element with class 'sec-text' not found");
    }

  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra điều kiện nhập sai cú pháp
    if (!isValidName(name) || !isValidEmail(email) || !isValidPhone(phone)) {
      // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi)
      alert('Please enter valid information');
      toast.success('asfhuiashfu')
      return;
    }
    toast.success('Cảm ơn bạn đã ủng hộ chúng mình')
    return

    // Xóa nội dung sau khi submit
    setName('');
    setEmail('');
    setPhone('');
  };

  const isValidName = (value) => {
    // Kiểm tra tên có đúng cú pháp không (ví dụ)
    return value.trim() !== '';
  };

  const isValidEmail = (value) => {
    // Kiểm tra định dạng email (ví dụ)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPhone = (value) => {
    // Kiểm tra số điện thoại có đúng cú pháp không (ví dụ)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
  };
  const toggleMenu = () => {
    console.log('Before toggle:', showMenu);
    setShowMenu(!showMenu);
    console.log('After toggle:', showMenu);
  };

  return (
    <>
      {/* <Cursor></Cursor> */}
      <div className={`container-Navbar`}>
        <div className='Navbar'>
          <div className='Navbar-left'>
            <img src={require('../src/public/image/logo512.png')} className='img-logoreact' alt='Logo'></img>
            <p className='text-logo'>Hoàng Phúc </p>
          </div>
          <div className='Navbar-middle'>
            <a href='#home'>Home <div className='Navbar-middle-Gach'></div></a>
            <a href='#project'>Projects <div className='Navbar-middle-Gach'></div></a>
            <a href='#about'>About <div className='Navbar-middle-Gach'></div></a>
            <a href='#education'>Education <div className='Navbar-middle-Gach'></div></a>
            <a href='#skill'>Skills <div className='Navbar-middle-Gach'></div></a>

            <a href='#experience'>Work Experience <div className='Navbar-middle-Gach'></div></a>
            {/* <a href='#project'>Projects</a> */}
          </div>
          <div className={`Navbar-right`}>
            <i className={`fa-solid fa-bars  ${showMenu ? 'menu-open' : ''}`} onClick={toggleMenu}></i>
          </div>
        </div>
      </div>
      <div className={`overlay ${showMenu ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`container-NavbarShow ${showMenu ? 'menu-open' : ''}`}>
        <div className='NavbarShow-top'><p className='text-logo'>Hoàng Phúc</p> <div className='NavbarShow-top-X' onClick={toggleMenu}><i class="fa-solid fa-x"></i></div></div>
        <div className='NavbarShow-middle'>
          <p className='NavbarShow-middle-AboutText'>ABOUT US</p>
          <p className='NavbarShow-middle-AboutText1' > Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            incididunt ut labore et magna aliqua. Ut enim ad minim veniam laboris.</p>
        </div>
        <div className='NavbarShow-bottom'>

          <p className='NavbarShow-bottom-Tieude'>GET IN TOUCH</p>
          <input
            className='NavbarShow-bottom-input'
            placeholder='Your Name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className='NavbarShow-bottom-input'
            placeholder='Your Email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className='NavbarShow-bottom-input'
            placeholder='Your Phone'
            type='text'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <button className='NavbarShow-bottom-button' onClick={handleSubmit}>
            Submit now
          </button>

        </div>
      </div>

      {/* <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p>
      <p>àhuas</p> <p>àhuas</p> <p>àhuas</p> <p>àhuas</p> */}


      <section id='home'>
        {/* <img src={require('./public/image/banner-scaled.jpg')} alt="Banner" className='Home-banner' /> */}
        <div className='Home-banner'></div>
        <div className='home-info'>
          {/* <p>I am Ho Hoang Phuc Developer Web</p> */}
          <div className='info-small'>
            <p>
              I'm a <strong>Hồ Hoàng Phúc</strong>
              <p className='sec-text'></p>
              <p className='text-small'>
                I am a passionate web developer, committed to creating high-quality websites with the best user experience. With extensive knowledge of programming languages and meticulous attention to detail, I specialize in turning complex ideas into powerful and effective web applications.
              </p>
              <button className='downloadCV'>Download CV <i className="fa-solid fa-download"></i></button>
            </p>
          </div>
        </div>
        <div className='home-avt'>
          <img src={require('../src/public/image/banner_img_1.png')} alt="Avatar" className='avt' />
        </div>
      </section>

      <section id='about'> {/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={2} animateOnce={true}>
          <h1>Hello, Animated on Scroll!</h1>
        </ScrollAnimation>

        <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" duration={1} animateOnce={true}>
          <p>This is a sample text with scroll animation.</p>
        </ScrollAnimation> */}</section>
      <section id='education'></section>
      <section id='skill'></section>
      <section id='about'></section>
    </>
  );
};

export default App;
