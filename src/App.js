
// import Cursor from './public/component/cursor';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import './Appresponsive.css';
import './Appproject.css';
import './AboutUS.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// Trong tệp src/index.js hoặc tệp nào đó mà bạn sử dụng Bootstrap


// import 'animate.css/animate.min.css'; // Import CSS của thư viện animate.css (được sử dụng bởi react-animate-on-scroll)
const App = () => {


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
    if (!isValidName(name)) {
      toast.error('Tên không đúng cú pháp')
      return;
    }
    if (!isValidEmail(email)) {
      toast.error('Email không đúng cú pháp')
      return;
    }
    if (!isValidPhone(phone)) {
      toast.error('Số điện thoại không đúng cú pháp')
      return;
    }
    toast.success('Cảm ơn bạn đã nhập thông tin liên hệ với tôi!!')
    setName('');
    setEmail('');
    setPhone('');
  };


  // toast.success('Cảm ơn bạn đã ủng hộ chúng mình')
  // return

  // Xóa nội dung sau khi submit



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
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    console.log('Before toggle:', showMenu);

    setShowMenu(!showMenu);








  };
  const [showMenuPhone, setShowMenuPhone] = useState(false);

  const handleMenuPhone = () => {
    setShowMenuPhone(!showMenuPhone);

  };
  return (
    <>
      {/* <Cursor></Cursor> */}
      < div div className={`mobile-navbar ${showMenuPhone ? 'open' : ''}`
      }>
        <div className="mobile-navbar-toggle" onClick={handleMenuPhone}>
          <div className="menu-icon"></div>

        </div>
        {/* <div className="mobile-navbar-toggle" onClick={toggleMenu}>
          <div className="menu-icon"></div>

        </div> */}
        <div className="mobile-navbar-links">


          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skill">Skills</a>
          <a href="#experience">Work Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </ div>
      <div className={`container-Navbar`}>
        <div className='Navbar'>
          <div className='Navbar-left'>
            <img src={require('../src/public/image/logo512.png')} className='img-logoreact' alt='Logo'></img>
            <p className='text-logo'>Hoàng Phúc </p>
          </div>
          <div className='Navbar-middle'>
            <a href='#home'>Home <div className='Navbar-middle-Gach'></div></a>
            <a href='#projects'>Projects <div className='Navbar-middle-Gach'></div></a>
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
      <div className={`overlayne ${showMenuPhone ? 'active' : ''}`} onClick={handleMenuPhone}></div>
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


      <section id='home' >
        {/* <img src={require('./public/image/banner-scaled.jpg')} alt="Banner" className='Home-banner' /> */}
        <div className='Home-banner'></div>
        <div className='home-info'>
          {/* <p>I am Ho Hoang Phuc Developer Web</p> */}
          <div className='info-small' data-aos="fade-up-right" data-aos-duration="2000">
            <p>
              I'm a <strong >Hồ Hoàng Phúc</strong>
              <p className='sec-text'></p>
              <p className='text-small'>
                I am a passionate web developer, committed to creating high-quality websites with the best user experience. With extensive knowledge of programming languages and meticulous attention to detail, I specialize in turning complex ideas into powerful and effective web applications.
              </p>
              <button className='downloadCV'>Download CV <i className="fa-solid fa-download"></i></button>
            </p>
          </div>
        </div>
        <div className='home-avt' data-aos="fade-up-left" data-aos-duration="2000">
          <img src={require('../src/public/image/banner_img_1.png')} alt="Avatar" className='avt' />
        </div>
      </section>

      <section id='projects' >
        <ScrollAnimation className='Container-project' animateIn="slideInRight" animateOut="fadeOut" duration={1} animateOnce={true} delay={500}>
          <Container className='Container-project-wrap'>
            <p className='Container-project-Text'>My Project</p>
            <p className='Container-project-Text-2'>Crafting stories through design and innovation</p>

            <Row className='Container-project-Box' >
              <Col sm={6} md={4}>
                <div className='project-1' >
                  {/* Nội dung cho project-1 */}
                </div>
              </Col>
              <Col sm={6} md={4}>
                <div className='project-2' >
                  {/* Nội dung cho project-2 */}
                </div>
              </Col>
              <Col md={4}>
                <div className='project-3' >
                  {/* Nội dung cho project-3 */}
                </div>
              </Col>
            </Row>
          </Container>
        </ScrollAnimation>


      </section>

      <section id='about'>
        <Container className='Container-About-wrap'>
          <Row className='Container-About-Box'>
            <Col md={6}>
              <Card className='About-1'>

                <Card.Title className='About-1-Text'>ABOUT ME</Card.Title>
                <Card.Text className='About-1-Text1'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>

              </Card>
            </Col>
            <Col md={6}>
              <Card className='About-2'>
                <Card.Body className='About-2-Background'>

                  <div className='About-2-Background1'></div>
                  <img src={require('./public/image/logo.jpg')} alt='logo' className='About-2-Background-image' />


                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='About-3'>
                <Card.Body>
                  <div className='About-3-thanhngang'></div>
                  <span className='About-3-Text'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                  </span>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='education'></section>
      <section id='skill'></section>

    </>
  );
};

export default App;
