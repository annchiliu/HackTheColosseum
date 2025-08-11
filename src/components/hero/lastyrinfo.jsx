import React, { useEffect, useState } from "react";
import "./lastyrinfo.css";
import "./contact.css";

const images = [
  { src: "/images/hackathon1.jpg", alt: "Hackathon Event 1" },
  { src: "/images/hackathon2.jpg", alt: "Hackathon Event 2" },
  { src: "/images/hackathon3.jpg", alt: "Hackathon Event 3" },
  { src: "/images/hackathon4.jpg", alt: "Hackathon Event 4" },
  { src: "/images/hackathon5.jpg", alt: "Hackathon Event 5" },
  { src: "/images/hackathon6.jpg", alt: "Hackathon Event 6" },
  { src: "/images/hackathon7.jpg", alt: "Hackathon Event 7" },
  { src: "/images/hackathon8.jpg", alt: "Hackathon Event 8" }
];

const LastYearInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  return (
    <React.Fragment>
      <div className="parent-lastyrinfo">
        <div className="section-title">
          <img src="images/bearicon.png" alt="arrow-logo" className="bear" />
          <h1>Last Year's Information</h1>
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
                  <img src="/images/first_advanced.jpg" alt="In-Person Best Overall" />
                </a>
              </div>
            </div>

            <div className="winner-category">
              <h3>In-Person Best Overall Runner-Up</h3>
              <div className="winner-image-container">
                <a href="https://devpost.com/software/minecraft-stock-market" target="_blank">
                  <img src="/images/inpersonrunnerjpg.jpg" alt="In-Person Best Overall Runner-Up" />
                </a>
              </div>
            </div>

            <div className="winner-category">
              <h3>In-Person Best Beginner Hack</h3>
              <div className="winner-image-container">
                <a href="https://devpost.com/software/cryptocolosseum-decentralized-charity-battles" target="_blank">
                  <img src="/images/bestbegin.jpg" alt="In-Person Best Beginner Hack" />
                </a>
              </div>
            </div>

            <div className="winner-category">
              <h3>Online Best Overall</h3>
              <div className="winner-image-container">
                <a href="https://devpost.com/software/car-smart" target="_blank">
                  <img src="/images/best_online.jpg" alt="Online Best Overall" />
                </a>
              </div>
            </div>
          </div>
        </div>

       <div className="carousel">
          <div className="carousel-inner">
            {images.map((img, index) => {
              let className = "carousel-item";
              if (index === currentIndex) className += " active";
              else if (
                index ===
                (currentIndex === 0 ? images.length - 1 : currentIndex - 1)
              )
                className += " prev";
              return (
                <div key={index} className={className}>
                  <img src={img.src} alt={img.alt} className="carousel-image" />
                </div>
              );
            })}

            {/* Controls */}
            <button
              className="carousel-control-prev"
              onClick={goToPrev}
              aria-label="Previous"
            >
              ❮
            </button>
            <button
              className="carousel-control-next"
              onClick={goToNext}
              aria-label="Next"
            >
              ❯
            </button>
          </div>

          <ol className="carousel-indicators">
            {images.map((_, index) => (
              <li
                key={index}
                className={index === currentIndex ? "active" : ""}
                onClick={() => setCurrentIndex(index)}
              ></li>
            ))}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LastYearInfo;
