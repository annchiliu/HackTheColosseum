import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      {/* <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="section-title">
            <img src="images/bearicon.png" alt="arrow-logo" className="bear"/>
            <h1>
              SCHEDULE
            </h1>
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="container-title">Registration opens</h2>
              <h2 className="date">
                <div>
                  September
                  <div>
                    <div> 5</div> <div>nd</div>
                  </div>
                </div>
              </h2>
              <p className="container-description">
                Registration is open for all tech enthusiasts, developers, and
                problem solvers! Join us for an
                exhilarating day of coding, collaboration, and competition
                as we tackle challenges and learn to develop cutting-edge
                solutions
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Registration Closes</h2>
              <h1 className="date">
                <div>
                  October
                  <div>
                    <div>12</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                Last call for registration! Time is running out to be a part of
                our hackathon event. Don't miss this incredible
                opportunity to join a community of tech enthusiasts, developers,
                and innovators from around the DMV!
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Opening Ceremony</h2>
              <h1 className="date">
                <div>
                  October
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
                <div className="event-time">
                  <p>
                    8:15 AM - 8:45 AM
                  </p>
                </div>
              </h1>
              <p className="container-description">
                Opening Ceremony! Join us for a team building session and light breakfast afterwards!
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Workshop #1</h2>
              <h1 className="date">
                <div>
                  October
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
                <div className="event-time">
                  <p>
                   9:15 AM - 9:45 AM
                  </p>
                </div>
              </h1>
              <p className="container-description">
                Attend the "Intro to Python" workshop to learn fundamental python concepts and to create functionable code!
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Workshop #2</h2>
              <h1 className="date">
                <div>
                  October
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
                <div className="event-time">
                  <p>
                    10:00 AM - 10:30 AM
                  </p>
                </div>
              </h1>
              <p className="container-description">
                Attend the "Intro to Scratch" workshop to explore simple coding with the popular Stratch language!
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Workshop #1</h2>
              <h1 className="date">
                <div>
                  October
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
                <div className="event-time">
                  <p>
                   9:15 AM - 9:45 AM
                  </p>
                </div>
              </h1>
              <p className="container-description">
                Attend the "Intro to Python" workshop to learn fundamental python concepts and to create functionable code!
              </p>
              <span className="circle"></span>
            </div>




          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="section-title">
            <img src="images/bearicon.png" alt="arrow-logo" className="bear"/>
            <h1>
              SCHEDULE
            </h1>
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration opens</h2>{" "}
              <h2 className="date-mobile">
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Registration is open for tech enthusiasts, developers, and
                problem solvers from all backgrounds. Join us for an
                exhilarating 24 hours of coding, collaboration, and competition
                as we tackle real-world challenges and develop cutting-edge
                solutions
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Abstract Submission</h2>
              <h1 className="date-mobile">
                {" "}
                <div>
                  Aug
                  <div>
                    <div>17</div> <div>th</div>
                  </div>
                  -Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Submit your abstracts and be a part of the forefront of
                innovation! We invite you to share your groundbreaking ideas and
                research at our esteemed hackathon event. This is your
                opportunity to present your unique insights and solutions 🚀👩‍💻
              </p>
              <span className="circle-mobile "></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Finalists Annoncements</h2>
              <h1 className="date-mobile">
                <div>
                  Sep
                  <div>
                    <div>1</div> <div>st</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Step into the limelight – the moment we've all been waiting for
                is here! We're thrilled to announce the finalists of our highly
                competitive hackathon event. After meticulous evaluation and
                deliberation, we've handpicked the most promising and innovative
                teams to move forward to the final round
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile">
              <h2 className="container-title-mobile">Registration Closes</h2>
              <h1 className="date-mobile">
                <div>
                  Aug
                  <div>
                    <div>28</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Last call for registration! Time is running out to be a part of
                our extraordinary hackathon event. Don't miss this incredible
                opportunity to join a community of tech enthusiasts, developers,
                and innovators from around the world. Registration will close
                soon, so act fast and secure your spot
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Hackathon Finale</h2>{" "}
              <br />
              <h1 className="date-mobile">
                <div>
                  sep
                  <div>
                    <div>8</div> <div>th</div>
                  </div>
                  - sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                Get ready for the moment of triumph – the Hackathon Finale is
                just around the corner! After an intense and exhilarating
                journey, we've arrived at the grand finale, where the most
                ingenious minds will showcase their remarkable solutions.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile ">
              <h2 className="container-title-mobile">Award Ceremony</h2>
              <h1 className="date-mobile">
                <div>
                  sep
                  <div>
                    <div>9</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description-mobile">
                The judges deliberate, and winners are announced in various
                categories, celebrating outstanding projects, creativity, and
                teamwork. The successful conclusion of the hackathon is
                commemorated with an awards ceremony and well-deserved
                celebrations.
              </p>
              <span className="circle-mobile"></span>
            </div>
          </div>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default schedule;
