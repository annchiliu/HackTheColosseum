import "./hero.css";
import React, { useEffect, useState, useMemo } from "react";
import ReactGA from "react-ga";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";
import VanillaTilt from "vanilla-tilt";
import Agenda from "./agenda";
import Schedule from "./schedule";
import Sponsors from "./sponsors";
import { Footer } from "../";
import { ReactComponent as Calender } from "../../assets/calender.svg";
import { ReactComponent as Info } from "../../assets/info.svg";
import { ReactComponent as Location } from "../../assets/location.svg";
import { ReactComponent as ArrowRightWhite } from "../../assets/arrow-right-white.svg";
import { ReactComponent as ArrowRightBlack } from "../../assets/arrow-right-black.svg";

const hero = () => {
  const handleRegisterClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://howardcounty.librarycalendar.com/event/hack-colosseum-276266"); // Change form here
  };
  
  const handleDevPostClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://hack-the-colosseum.devpost.com/?ref_content=online-hackathons&ref_feature=challenge&ref_medium=artificial-intelligence-channel");
  };

  const handleRulesClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "register",
    });
    window.open("https://hack-the-colosseum.devpost.com/rules");
  };

  const handleCardClicks = (card) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `${card}`,
    });
    window.open(`${card}`, "_self");
  };
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleScheduleClick = () => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "schedule",
    });
    window.open("https://docs.google.com/document/d/1LiOKqJa3wTf3KeAhxt9qy7TloAWRwsEsIQ8xSawMXw8/edit?usp=sharing");
  };

  const handleCountdown = () => {
    const countDate = new Date("October 18, 2024 10:00:00").getTime(); //9/21/2024
    const now = new Date().getTime();
    const diff = countDate - now;
    {
      if (now > countDate) return;
    }
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    var textDay = Math.floor(diff / day);
    var textHour = Math.floor((diff % day) / hour);
    var textMinute = Math.floor((diff % hour) / minute);
    var textSecond = Math.floor((diff % minute) / second);

    if (textDay.toString().length == 1) {
      textDay = `0${textDay}`;
    }
    if (textHour.toString().length == 1) {
      textHour = `0${textHour}`;
    }
    if (textMinute.toString().length == 1) {
      textMinute = `0${textMinute}`;
    }
    if (textSecond.toString().length == 1) {
      textSecond = `0${textSecond}`;
    }

    setCountdown({
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  useEffect(() => {
    const tilt = VanillaTilt.init(
      document.querySelectorAll(".anim"),
      {
        max: 10,
        speed: 400,
      },
      []
    );
    const interval = setInterval(() => handleCountdown(), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="parent_hero">
        <div className=" tag-hero-mobile">
          {/*
          <img
            src="/images/srm.webp"
            alt="srm logo"
            width="40vw"
            className="hero-srm-logo"
          /> */}
          <div className="tag">
            Celebrating DMV coders
          </div>
          {/* <img
            src="/images/srmvec.webp"
            alt="srmvec logo"
            width="60vw"
            className="hero-srmvec-logo"
          /> */}
        </div>

        {/* ----------------------- Page 1 ------------------------- */}
        <section className="column">
          <div className="left_side">
            <div className="curve"></div>

            <div className="title1">
            <h1 className="hackathon">
              Hack The 
              <img
                className="gladiator-bear"
                src="/images/bear.png"
                alt="Gladiator bear"
              />
              Colosseum
            </h1>

            </div>

            <div className="description">
              <p>
                The Glenelg Competitive Programming Club is excited to introduce its up-and-coming hybrid hackathon: Hack the Colosseum, sponsored by Constellation, Stansberry Research, Brightbots Initiative, Netesenz, and WolframAlpha.
              </p>
              <br/>
              <p>
                The hackathon will be hosted both in-person at the Miller Branch Library and online on Devpost on October 18th.  Prepare for a day filled with workshops, fun activities, and hacking! This hackathon is not affiliated with HCPSS.
              </p>
            </div>

            <div className="register_now" onClick={handleRegisterClick}>
              <div>
                <a>REGISTER NOW </a>
              </div>
              <div>
                {" "}
                <KeyboardDoubleArrowRightSharpIcon style={{ fontSize: 35 }} />
              </div>
            </div>
            <div className="countdown-main">
              <div className="countdown anim">
                <div className="day-card anim">
                  <h3 className="day">{countdown.days}</h3>
                  <h3>Days</h3>
                </div>
                <div className="sep">:</div>
                <div className="hour-card anim">
                  <h3 className="hours">{countdown.hours}</h3>
                  <h3>Hours</h3>
                </div>
                <div className="sep">:</div>
                <div className="min-card anim">
                  <h3 className="minutes">{countdown.minutes}</h3>
                  <h3>Minutes</h3>
                </div>
                <div className="sep">:</div>
                <div className="sec-card anim">
                  <h3 className="seconds">{countdown.seconds}</h3>
                  <h3>Seconds</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="right_side">
            {/* -------------------------- Column 1 * ---------------------------------- */}

            <div className="intro-boxes">
              <div className="col1 animated-div" id="diff-col1">
                <h3 className="text">
                  Oct-18th
                  <i className="fas fa-question-circle question-icon"></i>
                </h3>
                <p
                  className="text2"
                  onClick={() => handleScheduleClick()}
                >
                  Schedule <ArrowRightWhite className="arrow-right-icon" />
                </p>
                <p className="text3" > 
                  {/* onClick={() => handleCardClicks("/events")} */}
                  Venue <ArrowRightWhite className="arrow-right-icon" />
                </p>
              </div>
              {/* -------------------------- Column 2 * ---------------------------------- */}

              <div className="col1 animated-div" id="diff-col2">
                <h3 className="text">
                  <div>
                    Useful Information
                  </div>
                  <Calender className="calender-icon" />
                </h3>
                <p
                  className="text2"
                  onClick={handleDevPostClick}
                >
                  Devpost Listing <ArrowRightWhite className="arrow-right-icon" />
                </p>
                <p 
                  className="text3"
                  onClick={handleRulesClick}>
                  <span>
                    <i className="fas fa-map-marker-alt location-icon"></i>
                    HCLS Miller Branch/Remote
                  </span>
                  <ArrowRightWhite className="arrow-right-icon" />
                </p>
              </div>
            </div>
    
              <div className="blank-holder">
              </div>

              <div className="animated-div col9">
                <h3 className="text">
                  Prizes 
                </h3>
                
                <div className="prize-container">
                  <h4 className="prize-title">
                    In-Person Best Overall
                  </h4>

                  <ol>
                    <li>
                      Gaming Keyboard
                    </li>
                    <li>
                      AoPS gift cards
                    </li>
                    <li>
                      1-year access to Wolfram | One Professional Edition
                    </li>
                  </ol>

                  {/* ------------------------------ */}
                  
                  <h4 className="prize-title">
                  In-Person Best Overall Runner-Up
                  </h4>
                  <ol>
                    <li>
                      Wireless Earbuds
                    </li>
                    <li>
                      1-year access to Wolfram | One Professional Edition
                    </li>
                  </ol>

                  {/* ------------------------------ */}
                
                  <h4 className="prize-title">
                  In-Person Best Beginner Hack
                  </h4>
                  <ol>
                    <li>
                      Raspberry Pi 4
                    </li>
                    <li>
                      1-year access to Wolfram | One Professional Edition
                    </li>
                  </ol>

                  {/* ------------------------------ */}

                  <h4 className="prize-title">
                  In-Person Activity (2x)
                  </h4>
                  <p>
                  The winner of each of activity will win a $5 Amazon gift card
                  </p><br/>

                  {/* ------------------------------ */}
              
            

                  <h4 className="prize-title">
                    Online Best Overall
                    </h4>
                    <ol>
                      <li>
                        $25 Apple Gift Card
                      </li>
                      <li>
                        1-year access to Wolfram | One Professional Edition
                      </li>
                    </ol>
                    {/* ------------------------------ */}
                </div>

             
            </div>

            {/* <div className="col2 animated-div">
              <h3 className="text4">
                Information Details <Info className="info-icon" />
              </h3>
              <p className="text5" onClick={() => handleCardClicks("/about")}>
                About
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
              <p className="text6" onClick={() => handleCardClicks("/judges")}>
                Judge Panel
                <ArrowRightWhite className="arrow-right-icon" />
              </p>
            </div> */}
            {/* -------------------------- Column 3 * ---------------------------------- */}
            {/* <div className="col3 animated-div">
              <div className="flex justify-items-start">
                <h3 className="text7">Problem Statements</h3>
              </div>
              <p className="text8" onClick={() => handleCardClicks("/set1")}>
                Collection 1 <ArrowRightBlack className="arrow-right-icon" />
              </p>
              <p className="text9" onClick={() => handleCardClicks("/set2")}>
                Collection 2 <ArrowRightBlack className="arrow-right-icon" />
              </p>
            </div> */}
            {/* -------------------------- Column 4  ---------------------------------- */}
            {/* <div
              className="col4 animated-div"
              onClick={() =>
                window.open("https://www.google.com/maps/dir//Miller+Branch+-+Howard+County+Library+System,+9421+Frederick+Rd,+Ellicott+City,+MD+21042/@39.2657552,-77.0940799,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c82032ae0d3669:0xcef8a6a3d204468!2m2!1d-76.8393305!2d39.2728353?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D")
              }
            > */}
              {/* <h3 className="text10">
                Venue <Location className="location-icon" />
              </h3> */}
              {/* <div> */}
                {/* <p className="location">
                  Miller Branch - Howard County Library System
                </p> */}
                {/* <p className="text-white  text-[0.8vw] ">
                  National Highway 45, Potheri, SRM Nagar, Kattankulathur, Tamil
                  Nadu - 603203
                </p> */}
                {/* <div className="round"></div>
              </div> */}
            {/* </div> */}
            {/* -------------------------- Column 5  ---------------------------------- */}
            {/* <div className="col5"></div> */}
            {/* -------------------------- Column 6  ---------------------------------- */}
            {/* <div className="col6 animated-div">
              <h3 className="text13">
                Organized By
                <div className="flex justify-center items-center gap-1"></div>
              </h3>
              <div className="flex items-start justify-between flex-col">
                <p className="text14">Glenelg High School </p>
                <p className="text15">Competitive Programming Club</p>
                <div className="round2"></div>
              </div>
            </div> */}
          </div>
        </section>
        {/* -------------------------- Page 2 -------------------------- */}
      </div>
      <Agenda />
      <Schedule />
      <Sponsors />
      <Footer />
    </React.Fragment>
  );
};

export default hero;
