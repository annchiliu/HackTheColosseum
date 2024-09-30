import React from "react";
import "./navbar.css";
import {
  InstagramOutlined,
  InstagramFilled,
} from "@ant-design/icons";
import { SocialIcon } from "react-social-icons";
import { ReactComponent as Grid } from "../../assets/navgrid.svg";
import ReactGA from "react-ga";

const Navbar = () => {
  const handleInsta = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Instagram",
    });
    window.open("https://www.instagram.com/ghs_computing/");
  };
  
  const handleDiscord = () => {
    ReactGA.event({
      category: "Social Icon",
      action: "click",
      label: "Discord",
    });
    window.open("https://discord.gg/v2MV82AHgD");
  };

  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://howardcounty.librarycalendar.com/event/hack-colosseum-276266");
  };

  const handleScheduleClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "schedule",
    });
    window.open("https://docs.google.com/document/d/1mg4VfQEQmhtwVyeWSqvsYghllWwMao3p_Xmgaew2BDA/edit?usp=sharing");
  };

  const handleContactClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "schedule",
    });
    window.open("mailto:glenelg.competitive.programming@gmail.com");
  };


  const handleScroll = (id) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${id} - Navbar`,
    });
    if (window.location.pathname != "/") {
      window.open(`/${id}`, "_self");
    }
    setTimeout(() => {
      document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
    }, 200);
  };

  if (window.location.hash) handleScroll(window.location.hash);

  const handleNavMenuClick = () => {
    ReactGA.event({
      category: "Menu",
      action: "click",
      label: `Mobile Menu Grid`,
    });
    const NavVisiblility = document.querySelector(".parent-navbar-mobile");
    NavVisiblility.classList.toggle("navbar-open-mobile");

    const NavDropVisibility = document.querySelector(".navbar-open");
    NavDropVisibility.classList.toggle("navbar-close-mobile");
  };

  return (
    <React.Fragment>
      <div className="parent">
        <div className="components">
          <div className="title" onClick={() => window.open("/", "_self")}>
            <img 
              src="/images/bearicon.png"
              className="logo"
              alt="Logo"
            />
            Hackathon
            <div className="socials">
              <div className="insta">
                <SocialIcon
                  onClick={handleInsta}
                  network="instagram"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
              <div className="discord-icon">
                <SocialIcon
                  onClick={handleDiscord}
                  network="discord"
                  style={{
                    height: "3vw",
                    width: "3vw",
                  }}
                />
              </div>
            </div>
          </div>

          <ul>
            <li>
              <p onClick={() => window.open("/", "_self")}>HOME</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#agenda")}>AGENDA</p>
            </li>
            <li>
              <p onClick={handleScheduleClick}>SCHEDULE</p>
            </li>
            <li>
              <p onClick={() => handleScroll("#faqs")}>FAQs</p>
            </li>
            <li>
              <p onClick={handleContactClick}>CONTACT</p>
            </li>
          </ul>
          <div className="last">
            <h2 className="register">
              <p onClick={handleRegisterClick}> Register</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="main-navbar-mobile">
        <div className="parent-navbar-mobile">
          <div className="components-mobile">
            <div
              className="title-mobile"
              onClick={() => window.open("/", "_self")}
            >
              <img src="/images/bearicon.png" width="22vw" alt="logo" />
              Hackathon
            </div>
              <div className="last-mobile">
                <h2 className="register-mobile">
                  <a href="https://howardcounty.librarycalendar.com/event/hack-colosseum-276266" target="_blank">
                    register
                  </a>
                </h2>
              </div>
              <Grid
                className="navbar-menu-mobile "
                onClick={handleNavMenuClick}
              />
          </div>
          <div className="navbar-open navbar-close-mobile">
            <ul>
              <li>
                <p onClick={() => window.open("/", "_self")}>HOME</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#agenda")}>AGENDA</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#schedule")}>SCHEDULE</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#faqs")}>FAQs</p>
              </li>
              <li>
                <p onClick={() => handleScroll("#contact")}>CONTACT</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
