import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";
const sponsors = () => {
  return (
    <React.Fragment>
      <div className="parent-sponsors">
          <div className="section-title">
            <img src="images/bearicon.png" alt="arrow-logo" className="bear"/>
            <h1>
              SPONSORS
            </h1>
          </div>

        <div className="sponsors-container">
          <h2>Our Platinum Sponsors</h2>
          <div className="sponsors-container-sub gold" id="gold-container">
              <div className="sponsors-name">
                <a href="https://www.constellationenergy.com/"
                target="_blank">
                <img className="" src="/images/Constellation.png"></img>
                </a>
              </div>
          </div>
          <h2>Our Silver Sponsors</h2>
          <div className="sponsors-container-sub silver" id="silver-container">
              <div className="sponsors-name">
                <a href="https://stansberryresearch.com/"
                target="_blank">
                <img className="" src="/images/Stansberry.png"></img>
                </a>
              </div>

              <div className="sponsors-name">
                <a href="https://brightbotsint.org/"
                target="_blank">
                <img className="" src="/images/Brightbot.png"></img>
                </a>
              </div>

              <div className="sponsors-name">
                <img className="" src="/images/Net.png"></img>
              </div>
          </div>

          <h2>Our Bronze Sponsors</h2>
          <div className="sponsors-container-sub bronze">
            <div className="sponsors-name">
              <a href="https://www.wolframalpha.com/"
              target="_blank">
              <img src="/images/WolframAlpha.png"></img>
              </a>
            </div>
          </div>

       
      


        </div>

        {/* <div className="sponsors-container">
          <div className="sponsors-border">
            <div>
              <img src="/images/stansberry-research-logo.png" alt="Stansberry Research" />
            </div>
            <div className="sponsors-container-sub">
              <h1 className="sponsor-title">
                <a href="https://stansberryresearch.com/" target="_blank">
                  {" "}{" "}
                </a>
              </h1>
            </div>{" "}
            <LaunchLink className="link-launch-icon" />
          </div>
        </div> */}

        {/* <div className="sponsors-container">
          <div className="sponsors-border"> */}
            {/* <div>
              <img src="/images/wolfram.png" alt="Wolfram Alpha" />
            </div> */}
{/* 
            <div className="sponsors-container-sub"> */}
              {/* <h1 className="sponsor-title"> */}
                {/* <a href="https://www.wolframalpha.com/" target="_blank">
                  {" "}
                  Wolfram Alpha{" "}
                </a> */}
              {/* </h1> */}
            {/* </div>{" "} */}
            {/* <LaunchLink className="link-launch-icon" /> */}
          {/* </div>
        </div> */}
        <Faqs />
        <Contact />
        <Convener />
        <Coordinators />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
