
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

import './Education.css'
import './Skills.css'
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
          <div className='Navbar-left'>
            <img src={require('../src/public/image/logo512.png')} className='img-logoreact' alt='Logo'></img>
            <p className='text-logo'>Hoàng Phúc </p>
          </div>
          <div className='Navbar-middle'>
            <a href='#home'>Home <div className='Navbar-middle-Gach'></div></a>
            <a href='#projects'>Projects <div className='Navbar-middle-Gach'></div></a>
            <a href='#about'>About <div className='Navbar-middle-Gach'></div></a>
            <a href='#education'>Education <div className='Navbar-middle-Gach'></div></a>
            <a href='#skills'>Skills <div className='Navbar-middle-Gach'></div></a>

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
          <div className='info-small' >
            <p data-aos="fade-up-right" data-aos-duration="2000">
              I'm a <strong >Hồ Hoàng Phúc</strong>
              <p className='sec-text'></p>
              <p className='text-small'>
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
              <Card className='About-1' data-aos="fade-right" data-aos-duration="2000">

                <Card.Title className='About-1-Text'>ĐỐI VỚI TÔI</Card.Title>
                <Card.Text className='About-1-Text1'>
                  "Chuyên môn rất quan trọng, thái độ cũng vậy"
                </Card.Text>

              </Card>
            </Col>
            <Col md={6}>
              <Card className='About-2' data-aos="fade-left" data-aos-duration="2000">
                <Card.Body className='About-2-Background'>

                  <div className='About-2-Background1'></div>
                  <img src={require('./public/image/logo.jpg')} alt='logo' className='About-2-Background-image' />


                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='About-3' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>
                  <div className='About-3-thanhngang'></div>
                  <span className='About-3-Text'>Tôi tin rằng sự sáng tạo và
                    sự đam mê là yếu tố quan trọng trong việc trở thành một lập trình viên web
                    xuất sắc. Với tôi, mỗi dự án là một cơ hội để thể hiện khả năng sáng tạo của
                    mình và tạo ra những điều mới mẻ và độc đáo. Đồng thời tôi cũng sẽ cố gắng thích nghi với môi trường
                    làm việc của doanh nghiệp cùng với sự chuyên nghiệp của mình.
                  </span>


                </Card.Body>
              </Card>
            </Col>   <Col md={6}>
              <Card className='About-3 About-3-Download' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>


                  <button className='downloadCV'>  <a href='Chuong1_TongquanveTMDT.pdf' download="Chuong1_TongquanveTMDT.pdf">Download CV <i className="fa-solid fa-download" ></i></a></button>s

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='education'>
        <p>EDUCATION</p>
        <p>Showcasing your talent
          amplifying your impact</p>
        <Container className='Container-Education-wrap'>
          <Row className='Container-Education-Box'>
            <Col md={6}>
              <Card className='Education-1' data-aos="fade-right" data-aos-duration="2000">
                <span className='Education-1-time'>2005 - 2009</span>
                <Card.Title className='Education-1-Text'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>
                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='Education-2' data-aos="fade-left" data-aos-duration="2000">
                <span className='Education-1-time'>2005 - 2009</span>
                <Card.Title className='Education-1-Text'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>
                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>
              </Card>
            </Col>
            <Col md={6}>
              <Card className='Education-3' data-aos="fade-right" data-aos-duration="2000">
                <span className='Education-1-time' >2005 - 2009</span>
                <Card.Title className='Education-1-Text'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>
                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text'>Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>



              </Card>
            </Col>
            <Col md={6}>
              <Card className='Education-3' data-aos="fade-left" data-aos-duration="2000">
                <span className='Education-1-time'>2005 - 2009</span>
                <Card.Title className='Education-1-Text'>ABOUT ME</Card.Title>
                <Card.Text className='Education-1-Text1'>
                  Transforming visions into
                  exceptional portfolios
                </Card.Text>

                <div className='Education-3-thanhngang'></div>
                <span className='Education-3-Text'>1Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
                </span>


              </Card>
            </Col>
          </Row>
        </Container>

      </section>

      <section id='skills'>
        <div className='gachngang1'>
          <div className='gachngang'></div>
        </div>
        <p>SKILLS</p>
        <div className='Kienthucdahoc'>
          <Container className='Container-Skills-wrap'>
            <Row className='Container-Skills-Box'>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-1' data-aos="fade-right" data-aos-duration="2000">
                  <img className='img-react' src={require('../src/public/image/logo512.png')} alt="Reactjs" />
                  <p className='span-logo'>Reactjs</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-2' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/icons8-nodejs-480.png')} alt="Nodejs" />
                  <p className='span-nodejs'>Nodejs</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-3' data-aos="fade-right" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/icons8-javascript-480.png')} alt="Javascript" />
                  <p className='span-javascript'>Javascript</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-3' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/icons8-css-480.png')} alt="CSS" />
                  <p className='span-nodejs'>CSS</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-3' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/mysql.png')} alt="MySQL" />
                  <p className='span-nodejs' >MySQL</p>
                </Card>
              </Col>
              <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-3' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/c-sharp.png')} alt="C#" />
                  <p className='span-c' >C#</p>
                </Card>
              </Col>    <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-3' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/sql-server.png')} alt="SQL" />
                  <p className='span-c' >SQL Server</p>
                </Card>
              </Col>    <Col xl={3} lg={4} md={6} sm={12}>
                <Card className='Skills-3' data-aos="fade-left" data-aos-duration="2000">
                  <img className='img-nodejs' src={require('../src/public/image/bootstrap.png')} alt="Boostrap" />
                  <p className='span-c' >Boostrap</p>
                </Card>
              </Col>
            </Row>

          </Container>
          <div className='skills-wrap-text'>

            <div className='skills-text'>

              <p>
                Tôi là một người học hỏi tích cực và luôn nỗ lực để nắm
                vững và phát triển kỹ năng trong lĩnh vực công nghệ thông tin.
                Trong quá trình học tập và làm việc, tôi đã có cơ hội làm quen và
                làm việc với một số công nghệ quan trọng như ReactJS, Node.js, MySQL, C#, SQL, Bootstrap, HTML,
                CSS và JavaScript.

              </p><div className='Education-3-thanhngang'></div>
              <p> ReactJS và Node.js là hai công nghệ tôi đã dành nhiều thời
                gian để hiểu rõ và áp dụng vào các dự án trên trường học và cá nhân.</p>
              <p>Link dự án sử dụng Reactjs, Nodejs Express và CSDL MySQL:<a className='linkgit' href='https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript'>https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript</a></p>
              <div className='Education-3-thanhngang'></div>
              <p>
                Trong khoảng thời gian học tập trên nhà trường tôi đã có cơ hội làm việc nhóm
                học tập được ngôn ngữ C# ứng dụng làm dự án phần mềm bằng công nghệ .Net (WinForms) kết nối CSDL SQL Server.
                Trong đó tôi đóng vai trò là người viết mã nguồn chính cho dự án

              </p> <p>Link dự án sử dụng C# và CSDL SQL Server:
                <a className='linkgit' href='https://github.com/Minurte1/Application-Sell-Book-by-HTP'>https://github.com/Minurte1/Application-Sell-Book-by-HTP</a></p>
            </div>

          </div>








        </div>
      </section>

    </>
  );
};

export default App;
