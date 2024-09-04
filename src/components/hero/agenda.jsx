import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./agenda.css";
import animationData from "../../assets/mic.json";

const section2 = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id == "agenda-left")
            entry.target.classList.add("agendaScrollAnimateLeft");
          if (entry.target.id == "agenda-right")
            entry.target.classList.add("agendaScrollAnimateRight");
        }
      });
    };

    const options = {
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll(
      ".about-vision-title,.about-vision-description,.about-mission-title,.about-mission-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  const ref = useRef();
  return (
    <React.Fragment>
      <div className="section2">
        <div className="agenda" id="agenda">

          <div className="section-title">
            <img src="images/bearicon.png" alt="arrow-logo" className="bear"/>
            <h1>
              AGENDA
            </h1>
          </div>

          <div className="agenda-text">
            <div className="agenda-lottie-animation">
              <Lottie
                animationData={animationData}
                lottieRef={ref}
                style={{
                  width: "30vw",
                  height: "50vh",
                  scale: "1.3",
                  // background: "red",
                }}
                loop={false}
                onMouseEnter={() => {
                  ref.current.stop();
                  ref.current.setSpeed(0.5);
                  ref.current.play();
                }}
                onMouseLeave={() => ref.current.goToAndStop(1000)}
              />
            </div>
            <div className="agenda-des">
              A hackathon is an event where individuals come together
              to collaboratively work on solving specific problems or challenges
              within a limited timeframe, usually ranging from a few hours to a
              couple of days. It is a great opportunity for programmers, designers,
              entrepreneurs, and other creative minds to showcase their skills,
              creativity, and problem-solving abilities!
            </div>
          </div>
        </div>
        <div className="parent-vision">
          <div className="vision">
            <div className="about-vision-title vision-title" id="agenda-left">
              {/* <img
                src="/images/target.png"
                alt="vision-image"
                width="100px"
                className="about-vision-image"
              /> */}
              Vision
            </div>
            <div className="about-vision-description" id="agenda-right">
              "Hack the Colosseum" envisions a vibrant and collaborative community of student programmers. 
              By bringing students from diverse backgrounds and experiences together, we aim to cultivate an innovative and supportive learning environment that inspires creativity and encourages growth.
              Through hands-on workshops, mentoring, and team challenges, we strive to inspire the next generation of tech leaders and innovators here in the DMV.
            </div>
          </div>
          <div className="mission">
            <div className="about-vision-title mission-title" id="agenda-right">
              Mission
            </div>
            <div className="about-mission-description" id="agenda-left">
              Our hackathon aims to foster a positive and inclusive learning environment for students of all backgrounds and programming experience levels.
              Through various skill-building activities and workshops, participants will gain valuable coding knowledge and boost their confidence to build more projects and to explore computer science further.
              Advanced programmers will also face engaging challenges to further hone their skills and push the boundaries of their expertise.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default section2;
