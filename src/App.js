import Cursor from "./public/component/cursor";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./App.css";
// import ScrollAnimation from 'react-animate-on-scroll';
import "./Appresponsive.css";
import "./Appproject.css";
import "./AboutUS.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import "./cursor.css";
import "./Education.css";
import "./Skills.css";
import "./Lienhe.css";
import "./foolter.css";
// import './Carousel.css'
import "./ResponsiveDT.css";
import "./ResponsiveTablet.css";
import ImageModal from "./public/component/ChatImdage";

// ..
AOS.init();
// Trong tệp src/index.js hoặc tệp nào đó mà bạn sử dụng Bootstrap

// import 'animate.css/animate.min.css'; // Import CSS của thư viện animate.css (được sử dụng bởi react-animate-on-scroll)
const App = () => {
  const [speed, setSpeed] = useState(2);
  useEffect(() => {
    const intervalId = setInterval(() => {}, speed);
    return () => clearInterval(intervalId);
  }, [speed]);

  window.onload = function () {
    const text = document.querySelector(".sec-text");
    if (text) {
      const load = () => {
        setTimeout(() => {
          text.textContent = "Web Developer";
        }, 0);
        setTimeout(() => {
          text.textContent = "Web Frontend";
        }, 5900);
        setTimeout(() => {
          text.textContent = "Web Backend";
        }, 11900);
      };
      load();
      setInterval(load, 12000);
    } else {
      console.error("Element with class 'sec-text' not found");
    }
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidName(name)) {
      toast.error("Tên không đúng cú pháp");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Email không đúng cú pháp");
      return;
    }
    if (!isValidPhone(phone)) {
      toast.error("Số điện thoại không đúng cú pháp");
      return;
    }
    toast.success("Cảm ơn bạn đã nhập thông tin liên hệ với tôi!!");
    setName("");
    setEmail("");
    setPhone("");
  };

  // toast.success('Cảm ơn bạn đã ủng hộ chúng mình')
  // return

  // Xóa nội dung sau khi submit

  const isValidName = (value) => {
    // Kiểm tra tên có đúng cú pháp không (ví dụ)
    return value.trim() !== "";
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
    console.log("Before toggle:", showMenu);

    setShowMenu(!showMenu);
  };
  const [showMenuPhone, setShowMenuPhone] = useState(false);

  const handleMenuPhone = () => {
    setShowMenuPhone(!showMenuPhone);
  };

  const onButtonClick = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/CV/CV.pdf";
    // Mở một cửa sổ mới và tải xuống tệp PDF
    window.open(pdfUrl);
  };

  const [selectedColor, setSelectedColor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  //Màu color
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen)
  };

  // Mảng chứa các màu
  const colors = ["#f5f5f5", "#000000", "#092635", "#A2D2FF", "#FBFADA"]; // Thêm các màu khác nếu cần

  const handleColorClick = (color) => {
    try {
      if (color === "#f5f5f5") {
        const elements = document.getElementsByClassName("colorText");
        const elementsBlack = document.getElementsByClassName("colorTextBlack");
        const colorNavbarleft1 = document.getElementById("Navbar-1");
        const colorNavbarleft2 = document.getElementById("Navbar-2");
        const colorNavbarleft3 = document.getElementById("Navbar-3");
        const colorBackgroudBanner = document.getElementById("Home-banner");
        const backgroundColorBlack =
          document.getElementsByClassName("BackgroundBlack");
        const backgroundColorWhite =
          document.getElementsByClassName("BackgroundWhite");
        // const colorBackgroudprojects = document.getElementById('projects');

        colorNavbarleft1.classList.add("smooth-transition");
        colorNavbarleft2.classList.add("smooth-transition");
        colorNavbarleft3.classList.add("smooth-transition");
        colorBackgroudBanner.classList.add("smooth-transition");
        // colorBackgroudprojects.classList.add('smooth-transition');

        // Xóa lớp smooth-transition sau một khoảng thời gian
        setTimeout(() => {
          colorNavbarleft1.classList.remove("smooth-transition");
          colorNavbarleft2.classList.remove("smooth-transition");
          colorNavbarleft3.classList.remove("smooth-transition");
          colorBackgroudBanner.classList.remove("smooth-transition");
          // colorBackgroudprojects.classList.remove('smooth-transition');
        }, 1000);

        colorNavbarleft1.style.backgroundColor = "#31363F";
        colorNavbarleft2.style.backgroundColor = "#31363F";
        colorNavbarleft3.style.backgroundColor = "#31363F";

        colorBackgroudBanner.style.backgroundColor = "#f5f5f5";

        Array.from(backgroundColorBlack).forEach((backgroundColorBlack) => {
          // Thực hiện thay đổi màu cho từng phần tử
          backgroundColorBlack.style.backgroundColor = "#000000";
        });
        Array.from(backgroundColorWhite).forEach((backgroundColorWhite) => {
          // Thực hiện thay đổi màu cho từng phần tử
          backgroundColorWhite.style.backgroundColor = "#EBF3E8";
        });

        Array.from(elements).forEach((element) => {
          // Thực hiện thay đổi màu cho từng phần tử
          element.style.color = "#f5f5f5";
        });
        Array.from(elementsBlack).forEach((element) => {
          // Thực hiện thay đổi màu cho từng phần tử
          element.style.color = "#000000";
        });

        //colorBackgroudprojects.style.backgroundColor = '#f5f5f5';

        setIsOpen(!isOpen);
      }
      if (color === "#000000") {
        const elements = document.getElementsByClassName("colorText");
        const elementsBlack = document.getElementsByClassName("colorTextBlack");
        const colorNavbarleft1 = document.getElementById("Navbar-1");
        const colorNavbarleft2 = document.getElementById("Navbar-2");
        const colorNavbarleft3 = document.getElementById("Navbar-3");
        const colorBackgroudBanner = document.getElementById("Home-banner");
        // const colorBackgroudprojects = document.getElementById('projects');

        // Thêm lớp smooth-transition để kích hoạt hiệu ứng chuyển đổi
        colorNavbarleft1.classList.add("smooth-transition");
        colorNavbarleft2.classList.add("smooth-transition");
        colorNavbarleft3.classList.add("smooth-transition");
        colorBackgroudBanner.classList.add("smooth-transition");
        // colorBackgroudprojects.classList.add('smooth-transition');

        // Xóa lớp smooth-transition sau một khoảng thời gian
        setTimeout(() => {
          colorNavbarleft1.classList.remove("smooth-transition");
          colorNavbarleft2.classList.remove("smooth-transition");
          colorNavbarleft3.classList.remove("smooth-transition");
          colorBackgroudBanner.classList.remove("smooth-transition");
          //  colorBackgroudprojects.classList.remove('smooth-transition');
        }, 1000);

        // Thực hiện thay đổi màu sắc
        colorNavbarleft1.style.backgroundColor = "#31363F";
        colorNavbarleft2.style.backgroundColor = "#31363F";
        colorNavbarleft3.style.backgroundColor = "#31363F";
        colorBackgroudBanner.style.backgroundColor = "#000000";

        // Thực hiện thay đổi màu sắc của các phần tử
        const backgroundColorBlack =
          document.getElementsByClassName("BackgroundBlack");
        const backgroundColorWhite =
          document.getElementsByClassName("BackgroundWhite");
        Array.from(backgroundColorBlack).forEach((backgroundColorBlack) => {
          backgroundColorBlack.style.backgroundColor = "#ffffff";
        });
        Array.from(backgroundColorWhite).forEach((backgroundColorWhite) => {
          backgroundColorWhite.style.backgroundColor = "#000000";
        });

        //text Navbar
        Array.from(elements).forEach((elements) => {
          elements.style.color = "#f5f5f5";
        });
        Array.from(elementsBlack).forEach((element) => {
          element.style.color = "#ffffff";
        });

        // Thực hiện thay đổi màu sắc của phần projects
        //  colorBackgroudprojects.style.backgroundColor = '#f5f5f5';
        setIsOpen(!isOpen);
      }

      if (color === "#092635") {
        const elements = document.getElementsByClassName("colorText");
        const elementsBlack = document.getElementsByClassName("colorTextBlack");
        const colorNavbarleft1 = document.getElementById("Navbar-1");
        const colorNavbarleft2 = document.getElementById("Navbar-2");
        const colorNavbarleft3 = document.getElementById("Navbar-3");
        const colorBackgroudBanner = document.getElementById("Home-banner");
        //  const colorBackgroudprojects = document.getElementById('projects');
        const backgroundColorBlack =
          document.getElementsByClassName("BackgroundBlack");
        const backgroundColorWhite =
          document.getElementsByClassName("BackgroundWhite");
        // Thêm lớp smooth-transition để kích hoạt hiệu ứng chuyển đổi
        colorNavbarleft1.classList.add("smooth-transition");
        colorNavbarleft2.classList.add("smooth-transition");
        colorNavbarleft3.classList.add("smooth-transition");
        colorBackgroudBanner.classList.add("smooth-transition");
        //  colorBackgroudprojects.classList.add('smooth-transition');

        // Xóa lớp smooth-transition sau một khoảng thời gian
        setTimeout(() => {
          colorNavbarleft1.classList.remove("smooth-transition");
          colorNavbarleft2.classList.remove("smooth-transition");
          colorNavbarleft3.classList.remove("smooth-transition");
          colorBackgroudBanner.classList.remove("smooth-transition");
          //  colorBackgroudprojects.classList.remove('smooth-transition');
        }, 1000);

        //Navbar-Background
        colorNavbarleft1.style.backgroundColor = "#1b4242";
        colorNavbarleft2.style.backgroundColor = "#1b4242";
        colorNavbarleft3.style.backgroundColor = "#1b4242";
        colorBackgroudBanner.style.backgroundColor = "#092635";

        // Thực hiện thay đổi màu sắc của các phần tử

        //Background Phu
        Array.from(backgroundColorBlack).forEach((backgroundColorBlack) => {
          backgroundColorBlack.style.backgroundColor = "#ffffff";
        });

        //Background Main
        Array.from(backgroundColorWhite).forEach((backgroundColorWhite) => {
          backgroundColorWhite.style.backgroundColor = "#092635";
        });
        //text Navbar
        Array.from(elements).forEach((elements) => {
          elements.style.color = "#ffffff";
        });
        //text Main
        Array.from(elementsBlack).forEach((element) => {
          element.style.color = "#ffffff";
        });

        // Thực hiện thay đổi màu sắc của phần projects
        //  colorBackgroudprojects.style.backgroundColor = '#f5f5f5';
        setIsOpen(!isOpen);
      }
      if (color === "#A2D2FF") {
        const elements = document.getElementsByClassName("colorText");
        const elementsBlack = document.getElementsByClassName("colorTextBlack");
        const colorNavbarleft1 = document.getElementById("Navbar-1");
        const colorNavbarleft2 = document.getElementById("Navbar-2");
        const colorNavbarleft3 = document.getElementById("Navbar-3");
        const colorBackgroudBanner = document.getElementById("Home-banner");
        //  const colorBackgroudprojects = document.getElementById('projects');
        const backgroundColorBlack =
          document.getElementsByClassName("BackgroundBlack");
        const backgroundColorWhite =
          document.getElementsByClassName("BackgroundWhite");
        // Thêm lớp smooth-transition để kích hoạt hiệu ứng chuyển đổi
        colorNavbarleft1.classList.add("smooth-transition");
        colorNavbarleft2.classList.add("smooth-transition");
        colorNavbarleft3.classList.add("smooth-transition");
        colorBackgroudBanner.classList.add("smooth-transition");
        // colorBackgroudprojects.classList.add('smooth-transition');

        // Xóa lớp smooth-transition sau một khoảng thời gian
        setTimeout(() => {
          colorNavbarleft1.classList.remove("smooth-transition");
          colorNavbarleft2.classList.remove("smooth-transition");
          colorNavbarleft3.classList.remove("smooth-transition");
          colorBackgroudBanner.classList.remove("smooth-transition");
          //    colorBackgroudprojects.classList.remove('smooth-transition');
        }, 1000);

        //Navbar-Background
        colorNavbarleft1.style.backgroundColor = "#023047";
        colorNavbarleft2.style.backgroundColor = "#023047";
        colorNavbarleft3.style.backgroundColor = "#023047";
        colorBackgroudBanner.style.backgroundColor = "#A2D2FF";

        // Thực hiện thay đổi màu sắc của các phần tử

        //Background Phu
        Array.from(backgroundColorBlack).forEach((backgroundColorBlack) => {
          backgroundColorBlack.style.backgroundColor = "#BDE0FE";
        });

        //Background Main
        Array.from(backgroundColorWhite).forEach((backgroundColorWhite) => {
          backgroundColorWhite.style.backgroundColor = "#BDE0FE";
        });
        //text Navbar
        Array.from(elements).forEach((elements) => {
          elements.style.color = "#ffffff";
        });
        //text Main
        Array.from(elementsBlack).forEach((element) => {
          element.style.color = "#000000";
        });

        // Thực hiện thay đổi màu sắc của phần projects
        //  colorBackgroudprojects.style.backgroundColor = '#BDE0FE';
        setIsOpen(!isOpen);
      }

      if (color === "#FBFADA") {
        const elements = document.getElementsByClassName("colorText");
        const elementsBlack = document.getElementsByClassName("colorTextBlack");
        const colorNavbarleft1 = document.getElementById("Navbar-1");
        const colorNavbarleft2 = document.getElementById("Navbar-2");
        const colorNavbarleft3 = document.getElementById("Navbar-3");
        const colorBackgroudBanner = document.getElementById("Home-banner");
        //    const colorBackgroudprojects = document.getElementById('projects');
        const backgroundColorBlack =
          document.getElementsByClassName("BackgroundBlack");
        const backgroundColorWhite =
          document.getElementsByClassName("BackgroundWhite");
        // Thêm lớp smooth-transition để kích hoạt hiệu ứng chuyển đổi
        colorNavbarleft1.classList.add("smooth-transition");
        colorNavbarleft2.classList.add("smooth-transition");
        colorNavbarleft3.classList.add("smooth-transition");
        colorBackgroudBanner.classList.add("smooth-transition");
        // colorBackgroudprojects.classList.add('smooth-transition');

        // Xóa lớp smooth-transition sau một khoảng thời gian
        setTimeout(() => {
          colorNavbarleft1.classList.remove("smooth-transition");
          colorNavbarleft2.classList.remove("smooth-transition");
          colorNavbarleft3.classList.remove("smooth-transition");
          colorBackgroudBanner.classList.remove("smooth-transition");
          //      colorBackgroudprojects.classList.remove('smooth-transition');
        }, 1000);

        //Navbar-Background
        colorNavbarleft1.style.backgroundColor = "#436850";
        colorNavbarleft2.style.backgroundColor = "#436850";
        colorNavbarleft3.style.backgroundColor = "#436850";
        colorBackgroudBanner.style.backgroundColor = "#FBFADA";

        // Thực hiện thay đổi màu sắc của các phần tử

        //Background Phu
        Array.from(backgroundColorBlack).forEach((backgroundColorBlack) => {
          backgroundColorBlack.style.backgroundColor = "#12372A";
        });

        //Background Main
        Array.from(backgroundColorWhite).forEach((backgroundColorWhite) => {
          backgroundColorWhite.style.backgroundColor = "#ADBC9F";
        });
        //text Navbar
        Array.from(elements).forEach((elements) => {
          elements.style.color = "#ffffff";
        });
        //text Main
        Array.from(elementsBlack).forEach((element) => {
          element.style.color = "#000000";
        });

        // Thực hiện thay đổi màu sắc của phần projects
        //  colorBackgroudprojects.style.backgroundColor = '#ADBC9F';
        setIsOpen(!isOpen);
      }
    } catch (error) {}
    setSelectedColor(color);
  };
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const updateScrollPosition = () => {
      setCursorPosition((prevPosition) => ({
        ...prevPosition,
        y: window.scrollY + prevPosition.y,
      }));
    };

    document.addEventListener("mousemove", updateCursorPosition);

    const hoverElements = document.querySelectorAll(".hoverable");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleHover);
      element.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("scroll", updateScrollPosition);
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleHover);
        element.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };
  return (
    <>
      <div>
        {/* Your other content */}
        <div
          className={`cursor ${isHovered ? "hovered" : ""}`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
        />
      </div>
      {/* <Cursor></Cursor> */}
      <div div className={`mobile-navbar ${showMenuPhone ? "open" : ""}`}>
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
          <a href="#Lienhe">Work Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className={`container-Navbar`}>
        <div className="Navbar">
          <div className="Navbar-left" id="Navbar-1">
            <img
              src={require("../src/public/image/logo512.png")}
              className="img-logoreact"
              alt="Logo"
            ></img>
            <p className="text-logo colorText hoverable">Hoàng Phúc </p>
          </div>
          <div className="Navbar-middle" id="Navbar-2">
            <a href="#home" className="colorText hoverable">
              Trang chủ <div className="Navbar-middle-Gach "></div>
            </a>
            {/* <a href='#projects' className='colorText'>Dự án <div className='Navbar-middle-Gach '></div></a> */}
            <a href="#about" className="colorText hoverable">
              Bản thân tôi <div className="Navbar-middle-Gach "></div>
            </a>
            <a href="#education" className="colorText hoverable">
              Học tập<div className="Navbar-middle-Gach "></div>
            </a>
            <a href="#skills" className="colorText hoverable">
              Kĩ năng <div className="Navbar-middle-Gach "></div>
            </a>

            <a href="#Lienhe" className="colorText hoverable">
              Liên hệ <div className="Navbar-middle-Gach "></div>
            </a>

            {/* <a href='#project'>Projects</a> */}
          </div>
          <div className={`Navbar-right`} id="Navbar-3">
            <div className="color-picker">
              <i
                className="fa-solid fa-palette colorText hoverable"
                onClick={toggleDropdown}
              >
                {isOpen && (
                  <div
                    className="dropdown-content"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {colors.map((color, index) => (
                      <div
                        key={index}
                        className="color"
                        title={color}
                        style={{ backgroundColor: color }}
                        onClick={() => handleColorClick(color)}
                      ></div>
                    ))}
                  </div>
                )}
              </i>
            </div>
            <i
              className={`fa-solid fa-bars colorText hoverable  ${
                showMenu ? "menu-open" : ""
              }`}
              onClick={toggleMenu}
            ></i>
          </div>
        </div>
      </div>
      <div
        className={`overlayne ${showMenuPhone ? "active" : ""}`}
        onClick={handleMenuPhone}
      ></div>
      <div
        className={`overlay ${showMenu ? "active" : ""}`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`container-NavbarShow hoverable ${
          showMenu ? "menu-open" : ""
        }`}
      >
        <div className="NavbarShow-top">
          <p className="text-logo">Hoàng Phúc</p>{" "}
          <div className="NavbarShow-top-X" onClick={toggleMenu}>
            <i class="fa-solid fa-x"></i>
          </div>
        </div>
        <div className="NavbarShow-middle">
          <p className="NavbarShow-middle-AboutText">ĐỐI VỚI TÔI</p>
          <p className="NavbarShow-middle-AboutText1">
            {" "}
            Tôi tin rằng sự chuyên nghiệp giúp chúng ta có thể thấu hiểu nhau và
            tôn trọng nhau, nó giúp chúng ta đi xa hơn trong các dự án làm việc
            nhóm ở trường học và doanh nghiệp.{" "}
          </p>
        </div>
        <div className="NavbarShow-bottom">
          <p className="NavbarShow-bottom-Tieude">THÔNG TIN CỦA BẠN</p>
          <input
            className="NavbarShow-bottom-input"
            placeholder="Your Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className="NavbarShow-bottom-input"
            placeholder="Your Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="NavbarShow-bottom-input"
            placeholder="Your Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <button
            className="NavbarShow-bottom-button hoverable"
            onClick={handleSubmit}
          >
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

      <section id="home">
        {/* <img src={require('./public/image/banner-scaled.jpg')} alt="Banner" className='Home-banner' /> */}
        <div className="Home-banner" id="Home-banner"></div>
        <div className="home-info">
          {/* <p>I am Ho Hoang Phuc Developer Web</p> */}
          <div className="info-small ">
            <p
              data-aos="fade-up-right"
              data-aos-duration="2000"
              className="hoverable colorTextBlack info-small-SetriengMoblie"
            >
              I'm{" "}
              <strong className="colorTextBlack hoverable">
                Hồ Hoàng Phúc
              </strong>
              <p className="sec-text colorTextBlack"></p>
              <p className="text-small colorTextBlack hoverable">
                Tôi là một lập trình viên web với niềm đam mê sâu sắc đối với
                việc tạo ra các ứng dụng web độc đáo và chất lượng cao. Với một
                sự kết hợp giữa sự sáng tạo và kiến thức kỹ thuật vững vàng, tôi
                luôn tìm kiếm cơ hội để thử thách bản thân và mang lại giá trị
                đích thực thông qua công việc của mình.
              </p>
              <button className="downloadCV downloadCV-1">
                {" "}
                <a href="CV.pdf" download="CV.pdf">
                  Download CV <i className="fa-solid fa-download"></i>
                </a>
              </button>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a
                      className="facebook hoverable"
                      href="https://www.facebook.com/magin2px/"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter hoverable"
                      href="https://github.com/Minurte1"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble hoverable"
                      href="https://www.instagram.com/magin_phuc20px/"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="linked hoverable"
                      href="https://www.linkedin.com/in/ho%C3%A0ng-ph%C3%BAc-h%E1%BB%93-a59586267/"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="color-picker  setRiengMobile hoverable">
                <i
                  className="fa-solid fa-palette colorText downloadCV fa-palette-1 "
                  onClick={toggleDropdown}
                >
                  {isOpen && (
                    <div
                      className="dropdown-content"
                      style={{ display: isOpen ? "block" : "none" }}
                    >
                      {colors.map((color, index) => (
                        <div
                          key={index}
                          className="color"
                          title={color}
                          style={{ backgroundColor: color }}
                          onClick={() => handleColorClick(color)}
                        ></div>
                      ))}
                    </div>
                  )}
                </i>
              </div>
            </p>
          </div>
        </div>
        <div className="home-avt  ">
          <img
            src={require("../src/public/image/abc.png")}
            data-aos="fade-up-left"
            data-aos-duration="2000"
            alt="Avatar"
            className="avt hoverable"
          />
          {/* <img src={require('../src/public/image/banner_img_1.png')} data-aos="fade-up-left" data-aos-duration="2000" alt="Avatar" className='avt' /> */}
        </div>
      </section>
      <div className="gachngang1 BackgroundWhite">
        <div
          className="gachngang"
          data-aos="fade-down"
          data-aos-duration="2000"
        ></div>
      </div>
      {/* <section id='projects' className='BackgroundWhite'>

        <div className='Container-project BackgroundWhite' >
          <Container className='Container-project-wrap'>
            <p className='Container-project-Text colorTextBlack' data-aos="fade-down" data-aos-duration="2000">DỰ ÁN CỦA TÔI</p>
            <p className='Container-project-Text-2 colorTextBlack' data-aos="fade-up" data-aos-duration="2000">"Học lý thuyết phải đi đôi với thực hành"</p>

            <Row className='Container-project-Box' >
              <Col sm={6} md={4}>
                <div className='project-1' data-aos="fade-down" data-aos-duration="2000" >
                  
                </div>
              </Col>
              <Col sm={6} md={4}>
                <div className='project-2' data-aos="fade-up" data-aos-duration="2000" >
               
                </div>
              </Col>
              <Col md={4}>
                <div className='project-3' data-aos="fade-down" data-aos-duration="2000" >
                 
                </div>
              </Col>
            </Row>
          </Container>
        </div>


      </section>   */}

      <div className="gachngang1 BackgroundWhite">
        <div
          className="gachngang"
          data-aos="fade-down"
          data-aos-duration="2000"
        ></div>
      </div>
      <section id="about" className="BackgroundWhite">
        <Container className="Container-About-wrap">
          <Row className="Container-About-Box  BackgroundWhite">
            <Col md={6}>
              <Card
                className="About-1  BackgroundWhite"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <Card.Title className="About-1-Text  BackgroundWhite colorTextBlack hoverable">
                  ĐỐI VỚI TÔI
                </Card.Title>
                <Card.Text className="About-1-Text1  BackgroundWhite colorTextBlack hoverable">
                  "Chuyên môn rất quan trọng, thái độ cũng vậy"
                </Card.Text>
              </Card>
            </Col>

            <Col md={6}>
              <Card
                className="About-2  BackgroundWhite"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Card.Body className="About-2-Background">
                  <div className="About-2-Background1"></div>
                  <img
                    src={require("./public/image/logo.jpg")}
                    alt="logo"
                    className="About-2-Background-image BackgroundWhite hoverable"
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                className="About-3 BackgroundWhite"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Card.Body>
                  <div className="About-3-thanhngang"></div>
                  <span className="About-3-Text colorTextBlack hoverable">
                    Tôi tin rằng sự sáng tạo và sự đam mê là yếu tố quan trọng
                    trong việc trở thành một lập trình viên web xuất sắc. Với
                    tôi, mỗi dự án là một cơ hội để thể hiện khả năng sáng tạo
                    của mình và tạo ra những điều mới mẻ và độc đáo. Đồng thời
                    tôi cũng sẽ cố gắng thích nghi với môi trường làm việc của
                    doanh nghiệp cùng với sự chuyên nghiệp của mình.
                  </span>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                className="About-3 About-3-Download BackgroundWhite"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Card.Body>
                  <button className="downloadCV hoverable">
                    {" "}
                    <a href="CV.pdf" download="CV.pdf">
                      Download CV <i className="fa-solid fa-download"></i>
                    </a>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="gachngang1 BackgroundWhite">
        <div
          className="gachngang"
          data-aos="fade-down"
          data-aos-duration="2000"
        ></div>
      </div>
      <section id="education" className="BackgroundWhite">
        <p
          data-aos="fade-down"
          data-aos-duration="2000"
          className="colorTextBlack hoverable"
        >
          HỌC TẬP
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="colorTextBlack hoverable"
        >
          "Học để phát triển, thay đổi để hoàn thiện"
        </p>
        <Container className="Container-Education-wrap">
          <Row className="Container-Education-Box BackgroundWhite">
            <Col md={6}>
              <a
                href="https://github.com/Minurte1/Chat-Messanger-Nodejs-Socket-Reactjs.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className="Education-1 BackgroundWhite"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <span className="Education-1-time colorTextBlack hoverable">
                    3/4/2024 - 15/7/2024
                  </span>
                  <Card.Title className="Education-1-Text colorTextBlack hoverable">
                    THÔNG TIN
                  </Card.Title>
                  <Card.Text className="Education-1-Text1 colorTextBlack hoverable">
                    Ứng dụng Chat Messenger React.js, Nodejs
                  </Card.Text>
                  <div className="Education-3-thanhngang"></div>
                  <span className="Education-3-Text colorTextBlack hoverable">
                    Thiết lập backend với Node.js và Express, bao gồm API cho
                    quản lý người dùng và tin nhắn. Sử dụng Socket.IO để cung
                    cấp chức năng trò chuyện thời gian thực. Lưu trữ dữ liệu tin
                    nhắn trong MongoDB. Triển khai chức năng đăng nhập và đăng
                    ký người dùng. Github Project:
                  </span>
                </Card>
              </a>
            </Col>

            <Col md={6}>
              <a
                href="https://github.com/BaoQuocZero/DA_CongNghePhanMem_ShopShoe_JS.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className="Education-1 BackgroundWhite"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <span className="Education-1-time colorTextBlack hoverable">
                    22/4/2024 - 19/6/2024
                  </span>
                  <Card.Title className="Education-1-Text colorTextBlack hoverable">
                    THÔNG TIN
                  </Card.Title>
                  <Card.Text className="Education-1-Text1 colorTextBlack hoverable">
                    Xây Dựng Website Thương Mại Điện Tử Bán Giày
                  </Card.Text>
                  <div className="Education-3-thanhngang"></div>
                  <span className="Education-3-Text colorTextBlack hoverable">
                    Phát triển ứng dụng web cho cửa hàng giày sử dụng ReactJS
                    cho frontend và Node.js với Express cho backend. Triển khai
                    MySQL làm cơ sở dữ liệu và sử dụng JWT để thực hiện xác thực
                    và phân quyền người dùng. Tính năng nổi bật:Hệ thống xác
                    thực và phân quyền người dùng an toàn. Quản lý sản phẩm cho
                    phép thêm, chỉnh sửa và xóa sản phẩm giày. Giỏ hàng cho phép
                    người dùng thêm sản phẩm và thanh toán. Quản lý đơn hàng cho
                    quản trị viên. Thiết kế responsive cho trải nghiệm người
                    dùng mượt mà trên nhiều thiết bị. Sử dụng GitHub cho quản lý
                    phiên bản và JIRA cho quản lý dự án.
                  </span>
                </Card>
              </a>{" "}
            </Col>
            <Col md={6}>
              <a
                href="https://github.com/Minurte1/Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  className="Education-1 BackgroundWhite"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <span className="Education-1-time colorTextBlack hoverable">
                    3/2/2024 - Nay
                  </span>
                  <Card.Title className="Education-1-Text colorTextBlack hoverable">
                    THÔNG TIN
                  </Card.Title>
                  <Card.Text className="Education-1-Text1 colorTextBlack hoverable">
                    Portfolio Cá Nhân
                  </Card.Text>
                  <div className="Education-3-thanhngang"></div>
                  <span className="Education-3-Text colorTextBlack hoverable">
                    {" "}
                    Website portfolio cá nhân giới thiệu bản thân, sử dụng
                    reactjs, bootsrap để xây dựng giao diện{" "}
                  </span>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <div className='gachngang1 BackgroundWhite'>
        <div className='gachngang' data-aos="fade-down" data-aos-duration="2000"></div>
      </div> */}
      <section id="skills" className="BackgroundWhite">
        <div className="gachngang1">
          <div
            className="gachngang"
            data-aos="fade-down"
            data-aos-duration="2000"
          ></div>
        </div>
        <p
          data-aos="fade-down"
          data-aos-duration="2000"
          className="colorTextBlack hoverable"
        >
          KĨ NĂNG
        </p>
        <div className="Kienthucdahoc">
          <Container className="Container-Skills-wrap">
            <Row className="Container-Skills-Box BackgroundWhite">
              <Col xl={3} lg={4} md={6} sm={12} className="BackgroundWhite">
                <Card
                  className="Skills-1 Animation-Hover-CardSkills BackgroundWhite"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-react hoverable"
                    src={require("../src/public/image/logo512.png")}
                    alt="Reactjs"
                  />
                  <p className="span-logo colorTextBlack hoverable">Reactjs</p>
                </Card>
              </Col>
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="Skills-3-margin-DT BackgroundWhite"
              >
                <Card
                  className="Skills-2 Animation-Hover-CardSkills BackgroundWhite"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-nodejs hoverable"
                    src={require("../src/public/image/icons8-nodejs-480.png")}
                    alt="Nodejs"
                  />
                  <p className="span-nodejs colorTextBlack hoverable">Nodejs</p>
                </Card>
              </Col>
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="Skills-3-margin-DT BackgroundWhite"
              >
                <Card
                  className="Skills-3 Animation-Hover-CardSkills Skills-3-margin-Tablet BackgroundWhite"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-nodejs hoverable"
                    src={require("../src/public/image/icons8-javascript-480.png")}
                    alt="Javascript"
                  />
                  <p className="span-javascript colorTextBlack hoverable">
                    Javascript
                  </p>
                </Card>
              </Col>
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="Skills-3-margin-DT BackgroundWhite"
              >
                <Card
                  className="Skills-3 Animation-Hover-CardSkills Skills-3-margin-Tablet BackgroundWhite"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-nodejs hoverable"
                    src={require("../src/public/image/icons8-css-480.png")}
                    alt="CSS"
                  />
                  <p className="span-nodejs colorTextBlack hoverable">CSS</p>
                </Card>
              </Col>
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="setRieng BackgroundWhite"
              >
                <Card
                  className="Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills BackgroundWhite"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-nodejs hoverable"
                    src={require("../src/public/image/mysql.png")}
                    alt="MySQL"
                  />
                  <p className="span-nodejs colorTextBlack hoverable">MySQL</p>
                </Card>
              </Col>
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="Skills-3-margin-DT BackgroundWhite"
              >
                <Card
                  className="Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills BackgroundWhite"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-nodejs hoverable"
                    src={require("../src/public/image/c-sharp.png")}
                    alt="C#"
                  />
                  <p className="span-c colorTextBlack hoverable">C#</p>
                </Card>
              </Col>
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="Skills-3-margin-bot-Table BackgroundWhite"
              >
                <Card
                  className="Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills setRieng1 BackgroundWhite"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-nodejs hoverable"
                    src={require("../src/public/image/sql-server.png")}
                    alt="SQL"
                  />
                  <p className="span-c colorTextBlack hoverable">SQL Server</p>
                </Card>
              </Col>
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                className="Skills-3-margin-bot-Table Skills-3-margin-DT BackgroundWhite"
              >
                <Card
                  className="Skills-3 Skills-3-margin-bot Animation-Hover-CardSkills setRieng3 BackgroundWhite"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                >
                  <img
                    className="img-nodejs hoverable"
                    src={require("../src/public/image/bootstrap.png")}
                    alt="Boostrap"
                  />
                  <p className="span-c colorTextBlack hoverable">Boostrap</p>
                </Card>
              </Col>
            </Row>
          </Container>
          {/* <div className="container-skills-wrap-text">
            <Container className="skills-wrap-text">
              <Row className="skills-text ">
                <Col
                  xs={12}
                  md={4}
                  className="skills-text-card skills-text-card-top hoverable"
                >
                  <div className="Skills-3-thanhngang hoverable"></div>
                  <p>
                    Tôi là một người học hỏi tích cực và luôn nỗ lực để nắm vững
                    và phát triển kỹ năng trong lĩnh vực công nghệ thông tin.
                    Trong quá trình học tập và làm việc, tôi đã có cơ hội làm
                    quen và làm việc với một số công nghệ quan trọng như
                    ReactJS, Node.js, MySQL, C#, SQL, Bootstrap, HTML, CSS và
                    JavaScript.
                  </p>
                </Col>
                <Col
                  xs={12}
                  md={4}
                  className="skills-text-card skills-text-card-middle hoverable"
                >
                  <div className="Skills-3-thanhngang hoverable"></div>
                  <p>
                    ReactJS và Node.js là hai công nghệ tôi đã dành nhiều thời
                    gian để hiểu rõ và áp dụng vào các dự án trên trường học và
                    cá nhân.
                  </p>
                  <p>
                    Link dự án sử dụng Reactjs, Nodejs Express và CSDL MySQL:{" "}
                    <a
                      className="linkgit"
                      href="https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript"
                    >
                      https://github.com/Minurte1/csn-da21tta-hohoangphuc-bangiay-Javascript
                    </a>
                  </p>
                </Col>
                <Col
                  xs={12}
                  md={4}
                  className="skills-text-card skills-text-card-bot hoverable"
                >
                  <div className="Skills-3-thanhngang hoverable"></div>
                  <p>
                    Trong khoảng thời gian học tập trên nhà trường tôi đã có cơ
                    hội làm việc nhóm học tập được ngôn ngữ C# ứng dụng làm dự
                    án phần mềm bằng công nghệ .Net (WinForms) kết nối CSDL SQL
                    Server. Trong đó tôi đóng vai trò là người viết mã nguồn
                    chính cho dự án.
                  </p>
                  <p>
                    Link dự án sử dụng C# và CSDL SQL Server:{" "}
                    <a
                      className="linkgit"
                      href="https://github.com/Minurte1/Application-Sell-Book-by-HTP"
                    >
                      https://github.com/Minurte1/<br></br>
                      Application-Sell-Book-by-HTP
                    </a>
                  </p>
                </Col>
              </Row>
            </Container>
          </div> */}
        </div>
      </section>
      <section id="Lienhe" className="BackgroundWhite">
        <div className="gachngang1">
          <div
            className="gachngang"
            data-aos="fade-down"
            data-aos-duration="2000"
          ></div>
        </div>
        <Container className="Container-Lienhe-wrap">
          <Row className="Container-Lienhe-Box BackgroundWhite">
            <Col md={6}>
              <Card
                className="Lienhe-1 BackgroundWhite"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <Card.Title className="Lienhe-1-Text colorTextBlack hoverable">
                  THAM VỌNG
                </Card.Title>
                <Card.Text className="Lienhe-1-Text1 colorTextBlack hoverable">
                  "Bản lĩnh của một con người được thể hiện qua sự tham vọng và
                  trả giá"
                </Card.Text>
              </Card>
            </Col>
            <Col md={6} className="wrap-Lienhe2">
              <Card
                className="Lienhe-2"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <Card.Body className="Lienhe-2-Background">
                  <div className="Lienhe-2-Background-Wrap">
                    <h4 data-aos="fade-up" data-aos-duration="2000">
                      Liên hệ với tôi
                    </h4>
                    <input
                      className="Lienhe-2-input hoverable"
                      placeholder="Your Name"
                    ></input>{" "}
                    <br></br>
                    <input
                      className="Lienhe-2-input Lienhe-2-input-middle hoverable"
                      placeholder="Your Email"
                    ></input>{" "}
                    <br></br>
                    <input
                      className="Lienhe-2-input hoverable"
                      placeholder="Your Phone"
                    ></input>{" "}
                    <br></br>
                    <button
                      className="Lienhe-2-button hoverable"
                      data-aos="fade-right"
                      data-aos-duration="2000"
                    >
                      GỬI NGAY
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card
                className="Lienhe-3 BackgroundWhite"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <Card.Body>
                  <div className="Lienhe-3-thanhngang"></div>
                  <span className="Lienhe-3-Text colorTextBlack hoverable">
                    Tôi tin rằng sự chuyên nghiệp giúp chúng ta có thể thấu hiểu
                    nhau và tôn trọng nhau, nó giúp chúng ta đi xa hơn trong các
                    dự án làm việc nhóm ở trường học và doanh nghiệp.
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section id='carousel'>

        <div className="nav-container">
          <div className="layout">
            <img src={require('./public/image-image/1.jpg')} alt="image1" />
            <img src={require('./public/image-image/2.jpg')} alt="image2" />
            <img src={require('./public/image-image/3.jpg')} alt="image3" />
            <img src={require('./public/image-image/4.jpg')} alt="image4" />
            <img src={require('./public/image-image/5.jpg')} alt="image5" />
          </div>

        </div>

      </section> */}
      <section id="foolter">
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 hoverable">
                <h6>BẢN THÂN TÔI</h6>
                <p className="text-justify hoverable">
                  Tôi là <i>Hồ Hoàng Phúc </i> hiện là sinh viên năm 4 Công Nghệ
                  Thông Tin trường Đại Học Trà Vinh, tôi đang cố gắng học tập
                  rèn luyện để trở thành một lập trình viên Web giỏi trong tương
                  lai, tôi sẽ mang theo khát vọng này và cố gắng vương ra biển
                  lớn, dù có khó khăn, dù có vong bão, tôi vẫn sẵn sàng rời bến.
                  Vì ước mơ của một con thuyền là sẽ chinh phục những con sóng
                  hung tợn.{" "}
                </p>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>CÔNG NGHỆ</h6>
                <ul className="footer-links">
                  <li>
                    <a href="/" className="hoverable">
                      C
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hoverable">
                      HTML CSS
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hoverable">
                      JS
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hoverable">
                      C#
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hoverable">
                      Reactjs
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hoverable">
                      Nodejs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-xs-6 col-md-3">
                <h6>CHUYỂN HƯỚNG</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#home" className="hoverable">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="hoverable">
                      Dự án
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hoverable">
                      Bản thân tôi
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="hoverable">
                      Kĩ Năng
                    </a>
                  </li>
                  <li>
                    <a href="#education" className="hoverable">
                      Học Tập
                    </a>
                  </li>
                  <li>
                    <a href="#lienhe" className="hoverable">
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright © 2024 All Rights Reserved by
                  <a
                    href="https://www.facebook.com/magin2px/"
                    className="hoverable"
                  >
                    Hoàng Phúc.
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a
                      className="facebook hoverable"
                      href="https://www.facebook.com/magin2px/"
                    >
                      <i class="fa-brands fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="twitter hoverable"
                      href="https://github.com/Minurte1"
                    >
                      <i class="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dribbble hoverable"
                      href="https://www.instagram.com/magin_phuc20px/"
                    >
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="linked hoverable"
                      href="https://www.linkedin.com/in/ho%C3%A0ng-ph%C3%BAc-h%E1%BB%93-a59586267/"
                    >
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
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
