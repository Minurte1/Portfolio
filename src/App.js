
// import Cursor from './public/component/cursor';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import './Appresponsive.css';
import './Appproject.css';
import './AboutUS.css'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import './Education.css'
import './Skills.css'
import './Lienhe.css'
import './foolter.css'
import './ResponsiveDT.css'
import './ResponsiveTablet.css'

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
  const [isOpen, setIsOpen] = useState(false);
  //Màu color
  const toggleDropdown = () => {

    setIsOpen(!isOpen); console.log(isOpen)
  };

  // Mảng chứa các màu
  const colors = ['#C4DFDF', '#E1F0DA', '#163020']; // Thêm các màu khác nếu cần

  const handleSubmit = (e) => {
    e.preventDefault();

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


  const onButtonClick = () => {
    const pdfUrl = process.env.PUBLIC_URL + '/CV/CV.pdf';
    // Mở một cửa sổ mới và tải xuống tệp PDF
    window.open(pdfUrl);
  };

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    if (color === "#C4DFDF") {
      const elements = document.getElementsByClassName('colorText');
      const elementsBlack = document.getElementsByClassName('colorTextBlack');
      const colorNavbarleft1 = document.getElementById('Navbar-1')
      const colorNavbarleft2 = document.getElementById('Navbar-2')
      const colorNavbarleft3 = document.getElementById('Navbar-3')
      const colorBackgroudBanner = document.getElementById('Home-banner');
      colorNavbarleft1.style.backgroundColor = "#000000"
      colorNavbarleft2.style.backgroundColor = "#000000"
      colorNavbarleft3.style.backgroundColor = "#000000"

      colorBackgroudBanner.style.backgroundColor = '#f5f5f5';

      const backgroundColorBlack = document.getElementsByClassName('BackgroundBlack')
      const backgroundColorWhite = document.getElementsByClassName('BackgroundWhite')
      Array.from(backgroundColorBlack).forEach(backgroundColorBlack => {
        // Thực hiện thay đổi màu cho từng phần tử
        backgroundColorBlack.style.backgroundColor = '#000000';
      });
      Array.from(backgroundColorWhite).forEach(backgroundColorWhite => {
        // Thực hiện thay đổi màu cho từng phần tử
        backgroundColorWhite.style.backgroundColor = '#f5f5f5';
      });

      Array.from(elements).forEach(element => {
        // Thực hiện thay đổi màu cho từng phần tử
        element.style.color = '#f5f5f5';
      });
      Array.from(elementsBlack).forEach(element => {
        // Thực hiện thay đổi màu cho từng phần tử
        element.style.color = '#000000';
      });

      const colorBackgroudprojects = document.getElementById('projects');
      colorBackgroudprojects.style.backgroundColor = '#f5f5f5';


    }
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
          <a href="#skills">Skills</a>
          <a href="#experience">Work Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </ div>
      <div className={`container-Navbar`}>
        <div className='Navbar'>
          <div className='Navbar-left' id='Navbar-1'>
            <img src={require('../src/public/image/logo512.png')} className='img-logoreact' alt='Logo'></img>
            <p className='text-logo colorText'>Hoàng Phúc </p>
          </div>
          <div className='Navbar-middle' id='Navbar-2'>
            <a href='#home'>Trang chủ <div className='Navbar-middle-Gach colorText'></div></a>
            <a href='#projects'>Dự án <div className='Navbar-middle-Gach colorText'></div></a>
            <a href='#about'>Bản thân tôi <div className='Navbar-middle-Gach colorText'></div></a>
            <a href='#education'>Học tập<div className='Navbar-middle-Gach colorText'></div></a>
            <a href='#skills'>Kĩ năng <div className='Navbar-middle-Gach colorText'></div></a>

            <a href='#experience'>Liên hệ <div className='Navbar-middle-Gach colorText'></div></a>

            {/* <a href='#project'>Projects</a> */}
          </div>
          <div className={`Navbar-right`} id='Navbar-3'>
            <div className="color-picker">
              <i className="fa-solid fa-palette colorText" onClick={toggleDropdown}></i>
              {isOpen && (
                <div className="dropdown-content" style={{ display: isOpen ? 'block' : 'none' }}>

                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className="color"
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorClick(color)}
                    ></div>
                  ))}
                </div>
              )}
            </div>
            <i className={`fa-solid fa-bars colorText  ${showMenu ? 'menu-open' : ''}`} onClick={toggleMenu}></i>
          </div>
        </div>
      </div >
      <div className={`overlayne ${showMenuPhone ? 'active' : ''}`} onClick={handleMenuPhone}></div>
      <div className={`overlay ${showMenu ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className={`container-NavbarShow ${showMenu ? 'menu-open' : ''}`}>
        <div className='NavbarShow-top'><p className='text-logo'>Hoàng Phúc</p> <div className='NavbarShow-top-X' onClick={toggleMenu}><i class="fa-solid fa-x"></i></div></div>
        <div className='NavbarShow-middle'>
          <p className='NavbarShow-middle-AboutText'>ĐỐI VỚI TÔI</p>
          <p className='NavbarShow-middle-AboutText1' > Tôi tin rằng sự chuyên nghiệp giúp chúng ta có thể thấu hiểu nhau và tôn trọng nhau, nó giúp chúng
            ta đi xa hơn
            trong các dự án làm việc nhóm ở trường học và doanh nghiệp. </p>
        </div>
        <div className='NavbarShow-bottom'>

          <p className='NavbarShow-bottom-Tieude'>THÔNG TIN CỦA BẠN</p>
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
            GỬI NGAY
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
        <div className='Home-banner' id='Home-banner'></div>
        <div className='home-info'>
          {/* <p>I am Ho Hoang Phuc Developer Web</p> */}
          <div className='info-small ' >
            <p data-aos="fade-up-right" data-aos-duration="2000" className='colorTextBlack'>
              I'm a <strong className='colorTextBlack' >Hồ Hoàng Phúc</strong>
              <p className='sec-text colorTextBlack'></p>
              <p className='text-small colorTextBlack'>
                Tôi là một lập trình viên web với niềm đam mê sâu sắc đối với việc tạo
                ra các ứng dụng web độc đáo và chất lượng cao. Với một sự kết hợp giữa
                sự sáng tạo và kiến thức kỹ thuật vững vàng, tôi luôn tìm kiếm
                cơ hội để thử thách bản thân và mang lại giá trị đích thực thông qua công việc của mình.
              </p>
              <button className='downloadCV'>  <a href='Chuong1_TongquanveTMDT.pdf' download="Chuong1_TongquanveTMDT.pdf">Download CV <i className="fa-solid fa-download" ></i></a></button>

            </p>
          </div>
        </div>
        <div className='home-avt'>
          <img src={require('../src/public/image/banner_img_1.png')} data-aos="fade-up-left" data-aos-duration="2000" alt="Avatar" className='avt' />
        </div>

      </section>
      <div className='gachngang1 BackgroundWhite'>
        <div className='gachngang' data-aos="fade-down" data-aos-duration="2000"></div>
      </div>
      <section id='projects' >

        <div className='Container-project' >
          <Container className='Container-project-wrap'>
            <p className='Container-project-Text colorTextBlack' data-aos="fade-down" data-aos-duration="2000">DỰ ÁN CỦA TÔI</p>
            <p className='Container-project-Text-2 colorTextBlack' data-aos="fade-up" data-aos-duration="2000">"Học lý thuyết phải đi đôi với thực hành"</p>

            <Row className='Container-project-Box' >
              <Col sm={6} md={4}>
                <div className='project-1' data-aos="fade-down" data-aos-duration="2000" >
                  {/* Nội dung cho project-1 */}
                </div>
              </Col>
              <Col sm={6} md={4}>
                <div className='project-2' data-aos="fade-up" data-aos-duration="2000" >
                  {/* Nội dung cho project-2 */}
                </div>
              </Col>
              <Col md={4}>
                <div className='project-3' data-aos="fade-down" data-aos-duration="2000" >
                  {/* Nội dung cho project-3 */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>


      </section>
      <div className='gachngang1 BackgroundWhite'>
        <div className='gachngang' data-aos="fade-down" data-aos-duration="2000"></div>
      </div>
      <section id='about' className='BackgroundWhite'>
        <Container className='Container-About-wrap'>
          <Row className='Container-About-Box  BackgroundWhite' >
            <Col md={6}>
              <Card className='About-1  BackgroundWhite' data-aos="fade-right" data-aos-duration="2000">

                <Card.Title className='About-1-Text  BackgroundWhite colorTextBlack'>ĐỐI VỚI TÔI</Card.Title>
                <Card.Text className='About-1-Text1  BackgroundWhite colorTextBlack'>
                  "Chuyên môn rất quan trọng, thái độ cũng vậy"
                </Card.Text>

              </Card>
            </Col>
            <Col md={6}>
              <Card className='About-2  BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                <Card.Body className='About-2-Background'>

                  <div className='About-2-Background1'></div>
                  <img src={require('./public/image/logo.jpg')} alt='logo' className='About-2-Background-image  BackgroundWhite' />


                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='About-3 BackgroundWhite' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>
                  <div className='About-3-thanhngang'></div>
                  <span className='About-3-Text colorTextBlack'>Tôi tin rằng sự sáng tạo và
                    sự đam mê là yếu tố quan trọng trong việc trở thành một lập trình viên web
                    xuất sắc. Với tôi, mỗi dự án là một cơ hội để thể hiện khả năng sáng tạo của
                    mình và tạo ra những điều mới mẻ và độc đáo. Đồng thời tôi cũng sẽ cố gắng thích nghi với môi trường
                    làm việc của doanh nghiệp cùng với sự chuyên nghiệp của mình.
                  </span>


                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='About-3 About-3-Download BackgroundWhite' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>


                  <button className='downloadCV'>  <a href='Chuong1_TongquanveTMDT.pdf' download="Chuong1_TongquanveTMDT.pdf">Download CV <i className="fa-solid fa-download" ></i></a></button>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='education' className='BackgroundWhite'>
        <p data-aos="fade-down" data-aos-duration="2000" className='colorTextBlack'>HỌC VẤN</p>
        <p data-aos="fade-up" data-aos-duration="2000" className='colorTextBlack'>"Học để phát triển, thay đổi để hoàn thiện"</p>
        <Container className='Container-Education-wrap'>
          <Row className='Container-Education-Box BackgroundWhite'>
            <Col md={6} >
              <Card className='Education-1 BackgroundWhite' data-aos="fade-right" data-aos-duration="2000">
                <span className='Education-1-time colorTextBlack'>2005 - 2009</span>
                <Card.Title className='Education-1-Text colorTextBlack'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1 colorTextBlack'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>
                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text colorTextBlack'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='Education-2 BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                <span className='Education-1-time colorTextBlack'>2005 - 2009</span>
                <Card.Title className='Education-1-Text colorTextBlack'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1 colorTextBlack'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>
                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text colorTextBlack'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='Education-3 BackgroundWhite' data-aos="fade-right" data-aos-duration="2000">
                <span className='Education-1-time' >2005 - 2009</span>
                <Card.Title className='Education-1-Text colorTextBlack'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1 colorTextBlack'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>
                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text colorTextBlack'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>



              </Card>
            </Col>
            <Col md={6}>
              <Card className='Education-3 BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                <span className='Education-1-time'>2005 - 2009</span>
                <Card.Title className='Education-1-Text colorTextBlack'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1 colorTextBlack'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>

                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text colorTextBlack'>1Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>


              </Card>
            </Col>
          </Row>
        </Container>

      </section>

      <section id='skills' className='BackgroundWhite'>
        <div className='gachngang1'>
          <div className='gachngang' data-aos="fade-down" data-aos-duration="2000"></div>
        </div>
        <p data-aos="fade-down" data-aos-duration="2000" className='colorTextBlack'>KĨ NĂNG</p>
        <div className='Kienthucdahoc'>
          <Container className='Container-Skills-wrap'>
            <Row className='Container-Skills-Box '>
              <Col xl={3} lg={4} md={6} sm={12} className='BackgroundWhite'>
                <Card className='Skills-1 Animation-Hover-CardSkills BackgroundWhite' data-aos="fade-right" data-aos-duration="2000">
                  <img className='img-react' src={require('../src/public/image/logo512.png')} alt="Reactjs" />
                  <p className='span-logo colorTextBlack'>Reactjs</p>

                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12} className='Skills-3-margin-DT BackgroundWhite'>
                <Card className='Skills-2 Animation-Hover-CardSkills BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/icons8-nodejs-480.png')} alt="Nodejs" />
                  <p className='span-nodejs colorTextBlack'>Nodejs</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12} className='Skills-3-margin-DT BackgroundWhite'>
                <Card className='Skills-3 Animation-Hover-CardSkills Skills-3-margin-Tablet BackgroundWhite' data-aos="fade-right" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/icons8-javascript-480.png')} alt="Javascript" />
                  <p className='span-javascript colorTextBlack'>Javascript</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12} className='Skills-3-margin-DT BackgroundWhite'>
                <Card className='Skills-3 Animation-Hover-CardSkills Skills-3-margin-Tablet BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/icons8-css-480.png')} alt="CSS" />
                  <p className='span-nodejs colorTextBlack'>CSS</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12} className='setRieng BackgroundWhite'>
                <Card className='Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/mysql.png')} alt="MySQL" />
                  <p className='span-nodejs colorTextBlack' >MySQL</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12} className='Skills-3-margin-DT BackgroundWhite'>
                <Card className='Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/c-sharp.png')} alt="C#" />
                  <p className='span-c colorTextBlack' >C#</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12} className='Skills-3-margin-bot-Table BackgroundWhite'>
                <Card className='Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills setRieng1 BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/sql-server.png')} alt="SQL" />
                  <p className='span-c colorTextBlack' >SQL Server</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12} className='Skills-3-margin-bot-Table Skills-3-margin-DT BackgroundWhite'>
                <Card className='Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills setRieng3 BackgroundWhite' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/bootstrap.png')} alt="Boostrap" />
                  <p className='span-c colorTextBlack' >Boostrap</p>
                </Card>
              </Col>
            </Row>

          </Container>
          <div className='container-skills-wrap-text'>
            <Container className='skills-wrap-text'>
              <Row className='skills-text'>
                <Col xs={12} md={4} className='skills-text-card skills-text-card-top'>
                  <div className='Skills-3-thanhngang'></div>
                  <p>
                    Tôi là một người học hỏi tích cực và luôn nỗ lực để nắm vững và phát triển kỹ năng trong lĩnh vực công nghệ thông tin.
                    Trong quá trình học tập và làm việc, tôi đã có cơ hội làm quen và làm việc với một số công nghệ quan trọng như ReactJS, Node.js, MySQL, C#, SQL, Bootstrap, HTML, CSS và JavaScript.
                  </p>
                </Col>
                <Col xs={12} md={4} className='skills-text-card skills-text-card-middle'>
                  <div className='Skills-3-thanhngang'></div>
                  <p>
                    ReactJS và Node.js là hai công nghệ tôi đã dành nhiều thời gian để hiểu rõ và áp dụng vào các dự án trên trường học và cá nhân.
                  </p>
                  <p>
                    Link dự án sử dụng Reactjs, Nodejs Express và CSDL MySQL: <a className='linkgit' href='https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript'>https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript</a>
                  </p>
                </Col>
                <Col xs={12} md={4} className='skills-text-card skills-text-card-bot'>
                  <div className='Skills-3-thanhngang'></div>
                  <p>
                    Trong khoảng thời gian học tập trên nhà trường tôi đã có cơ hội làm việc nhóm học tập được ngôn ngữ C# ứng dụng làm dự án phần mềm bằng công nghệ .Net (WinForms) kết nối CSDL SQL Server.
                    Trong đó tôi đóng vai trò là người viết mã nguồn chính cho dự án.
                  </p>
                  <p>
                    Link dự án sử dụng C# và CSDL SQL Server: <a className='linkgit' href='https://github.com/Minurte1/Application-Sell-Book-by-HTP'>https://github.com/Minurte1/<br></br>Application-Sell-Book-by-HTP</a>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>



        </div>
      </section>
      <section id='Lienhe' className='BackgroundWhite'>
        <div className='gachngang1'>
          <div className='gachngang' data-aos="fade-down" data-aos-duration="2000"></div>
        </div>
        <Container className='Container-Lienhe-wrap'>
          <Row className='Container-Lienhe-Box BackgroundWhite'>
            <Col md={6}>
              <Card className='Lienhe-1 BackgroundWhite' data-aos="fade-right" data-aos-duration="2000">

                <Card.Title className='Lienhe-1-Text colorTextBlack'>THAM VỌNG</Card.Title>
                <Card.Text className='Lienhe-1-Text1 colorTextBlack'>
                  "Bản lĩnh của một con người được thể hiện qua sự tham vọng và trả giá"
                </Card.Text>

              </Card>
            </Col>
            <Col md={6} className='wrap-Lienhe2'>
              <Card className='Lienhe-2' data-aos="fade-left" data-aos-duration="2000">
                <Card.Body className='Lienhe-2-Background'>
                  <div className='Lienhe-2-Background-Wrap'>
                    <h4 data-aos="fade-up" data-aos-duration="2000" >Liên hệ với tôi</h4>
                    <input className='Lienhe-2-input' placeholder='Your Name'></input> <br></br>
                    <input className='Lienhe-2-input Lienhe-2-input-middle' placeholder='Your Email'></input> <br></br>
                    <input className='Lienhe-2-input' placeholder='Your Phone'></input> <br></br>
                    <button className='Lienhe-2-button' data-aos="fade-right" data-aos-duration="2000" >GỬI NGAY</button>

                  </div>


                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='Lienhe-3 BackgroundWhite' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>
                  <div className='Lienhe-3-thanhngang'></div>
                  <span className='Lienhe-3-Text colorTextBlack'>Tôi tin rằng sự chuyên nghiệp giúp chúng ta có thể thấu hiểu nhau và tôn trọng nhau, nó giúp chúng ta đi xa hơn trong các dự án làm việc nhóm ở trường học và doanh nghiệp.
                  </span>


                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>
      <section id='foolter'>

        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>BẢN THÂN TÔI</h6>
                <p className="text-justify">Tôi là <i>Hồ Hoàng Phúc </i> hiện là sinh viên năm 3 Công Nghệ Thông Tin trường Đại Học Trà Vinh, tôi đang cố gắng
                  học tập rèn luyện để trở thành một lập trình viên Web giỏi trong tương lai,
                  tôi sẽ mang theo khát vọng này và cố gắng vương ra biển lớn, dù có khó khăn,
                  dù có vong bão, tôi vẫn sẵn sàng rời bến. Vì ước mơ của một con thuyền
                  là sẽ chinh phục những con sóng hung tợn. </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>CÔNG NGHỆ</h6>
                <ul className="footer-links">
                  <li><a href="/">C</a></li>
                  <li><a href="/">HTML CSS</a></li>
                  <li><a href="/">JS</a></li>
                  <li><a href="/">C#</a></li>
                  <li><a href="/">Reactjs</a></li>
                  <li><a href="/">Nodejs</a></li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>CHUYỂN HƯỚNG</h6>
                <ul className="footer-links">
                  <li><a href="#home">Trang chủ</a></li>
                  <li><a href="#projects">Dự án</a></li>
                  <li><a href="#about">Bản thân tôi</a></li>
                  <li><a href="#skills">Kĩ Năng</a></li>
                  <li><a href="#education">Học Tập</a></li>
                  <li><a href="#lienhe">Liên hệ</a></li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">Copyright © 2024 All Rights Reserved by
                  <a href="https://www.facebook.com/magin2px/">Hoàng Phúc.</a>
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li><a className="facebook" href="https://www.facebook.com/magin2px/"><i class="fa-brands fa-facebook"></i></a></li>
                  <li><a className="twitter" href="https://github.com/Minurte1"><i class="fa-brands fa-github"></i></a></li>
                  <li><a className="dribbble" href="https://www.instagram.com/magin_phuc20px/"><i class="fa-brands fa-instagram"></i></a></li>

                </ul>
              </div>
            </div>
          </div>
        </footer>





      </section>

    </>
  );
};

export default App;
