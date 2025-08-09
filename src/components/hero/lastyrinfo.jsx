import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import "./lastyrinfo.css";
import "./contact.css";
import animationData from "../../assets/mic.json";

const LastYearInfo = () => {
    return (
        <React.Fragment>
          <div className="parent-lastyrinfo">
              <div className="section-title">
                <img src="images/bearicon.png" alt="arrow-logo" className="bear"/>
                <h1>
                  Last Year's Information
                </h1>
              </div>
            
            <div className="stats-container">
                <h2>Statistics</h2>
                <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Participants</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">41</div>
                    <div className="stat-label">Projects</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">3</div>
                    <div className="stat-label">Workshops</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">11</div>
                    <div className="stat-label">Countries</div>
                </div>
                <div className="stat-card">
                    <div className="stat-number">8</div>
                    <div className="stat-label">Hours</div>
                </div>
                </div>
            </div>

            <div className="past-winners-section">
                <h2>Past Winners</h2>
                <div className="winners-grid">
                    <div className="winner-category first-place">
                        <h3>In-Person Best Overall</h3>
                        <div className="winner-image-container">
                            <a href="https://devpost.com/software/plutus-y6q9kg" target="_blank">
                                <img src="/images/first_advanced.jpg" alt="In-Person Best Overall"/>
                            </a>
                        </div>
                    </div>

                    <div className="winner-category">
                        <h3>In-Person Best Overall Runner-Up</h3>
                        <div className="winner-image-container">
                            <a href="https://devpost.com/software/minecraft-stock-market" target="_blank">
                                <img src="/images/inpersonrunnerjpg.jpg" alt="In-Person Best Overall Runner-Up"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="winner-category">
                        <h3>In-Person Best Beginner Hack</h3>
                        <div className="winner-image-container">
                            <a href="https://devpost.com/software/cryptocolosseum-decentralized-charity-battles" target="_blank">
                                <img src="/images/bestbegin.jpg" alt="In-Person Best Beginner Hack"/>
                            </a>
                        </div>
                    </div>
                    
                    <div className="winner-category">
                        <h3>Online Best Overall</h3>
                        <div className="winner-image-container">
                            <a href="https://devpost.com/software/car-smart" target="_blank">
                                <img src="/images/best_online.jpg" alt="Online Best Overall"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </React.Fragment>
    );
};

export default LastYearInfo;