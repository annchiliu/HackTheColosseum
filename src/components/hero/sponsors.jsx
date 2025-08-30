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
            2025 SPONSORS
          </h1>
        </div>
        
        <div className="sponsors-container">
          <h2>Our Partner</h2>
          <div className="sponsors-container-sub partner" id="partner-container">
              <div className="sponsors-name">
                <a href="https://polaris.hclibrary.org/Polaris/"
                target="_blank">
                <img className="" src="/images/HCLS.png"></img>
                </a>
              </div>
          </div>
          <h2>Our Platinum Sponsors</h2>
          <div className="sponsors-container-sub gold" id="gold-container">
            <div className="sponsors-name">
                    <a href="https://www.wolframalpha.com/" target="_blank">
                        <img src="/images/WolframAlpha.png" alt="Wolfram Alpha"/>
                    </a>
                </div>
          </div>
          <h2>Our Silver Sponsors</h2>
          <div className="sponsors-container-sub silver" id="silver-container">
            <div className="sponsors-name">
                    <a href="https://www.wegmans.com/" target="_blank">
                        <img src="/images/Wegmans.png" alt="Wegmans"/>
                    </a>
                </div>
                <div className="sponsors-name">
                    <a href="https://www.interviewcake.com/" target="_blank">
                        <img src="/images/cake_logo_white_on_blue.png" alt="Wegmans"/>
                    </a>
                </div>
          </div>
          <h2>Our Bronze Sponsors</h2>
          <div className="sponsors-container-sub bronze">
                <div className="sponsors-name">
                    <a href="https://artofproblemsolving.com/" target="_blank">
                        <img src="/images/AOPS.png" alt="Art of Problem Solving"/>
                    </a>
                </div>
                <div className="sponsors-name">
                    <a href="https://gen.xyz/" target="_blank">
                        <img src="/images/xyz-logo-color.png" alt=".xyz"/>
                    </a>
                </div>
            </div>
        </div>
      </div>

      <div className="parent-past-sponsors">
        <div className="past-section-title">
          <img src="images/bearicon.png" alt="arrow-logo" className="bear"/>
          <h1>
            PAST SPONSORS: 2024
          </h1>
        </div>

        <div className="past-sponsors-container">
            <h2>Our Partner</h2>
            <div className="past-sponsors-container-sub partner" id="partner-container">
                <div className="past-sponsors-name">
                    <a href="https://polaris.hclibrary.org/Polaris/" target="_blank">
                        <img src="/images/HCLS.png" alt="Howard County Library System"/>
                    </a>
                </div>
            </div>

            <h2>Our Platinum Sponsors</h2>
            <div className="past-sponsors-container-sub gold" id="gold-container">
                <div className="past-sponsors-name">
                    <a href="https://www.constellationenergy.com/" target="_blank">
                        <img src="/images/Constellation.png" alt="Constellation Energy"/>
                    </a>
                </div>
            </div>

            <h2>Our Silver Sponsors</h2>
            <div className="past-sponsors-container-sub silver" id="silver-container">
                <div className="past-sponsors-name">
                    <a href="https://stansberryresearch.com/" target="_blank">
                        <img src="/images/Stansberry.png" alt="Stansberry Research"/>
                    </a>
                </div>

                <div className="past-sponsors-name">
                    <a href="https://brightbots.org/" target="_blank">
                        <img src="/images/brightbots.jpg" alt="Bright Bots"/>
                    </a>
                </div>

                <div className="past-sponsors-name">
                    <a href="https://www.netesenz.com/" target="_blank">
                        <img src="/images/Net.png" alt="Netesenz"/>
                    </a>
                </div>
            </div>

            <h2>Our Bronze Sponsors</h2>
            <div className="past-sponsors-container-sub bronze">
                <div className="past-sponsors-name">
                    <a href="https://www.wolframalpha.com/" target="_blank">
                        <img src="/images/WolframAlpha.png" alt="Wolfram Alpha"/>
                    </a>
                </div>

                <div className="past-sponsors-name">
                    <a href="https://artofproblemsolving.com/" target="_blank">
                        <img src="/images/AOPS.png" alt="Art of Problem Solving"/>
                    </a>
                </div>

                <div className="past-sponsors-name">
                    <a href="https://www.wegmans.com/" target="_blank">
                        <img src="/images/Wegmans.png" alt="Wegmans"/>
                    </a>
                </div>
            </div>
        </div>
      </div>

      <Faqs />
      <Contact />
      <Convener />
      <Coordinators />
    </React.Fragment>
  );
};

export default sponsors;