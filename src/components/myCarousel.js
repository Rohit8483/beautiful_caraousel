import React, { useEffect, useState } from "react";
import "./css/Carousel.css";

const Carousel = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [playPause, setPlayPause] = useState(true);

  useEffect(() => {
    let interval;
    if (playPause) {
      interval = setInterval(() => {
        setImgIndex((prevIndx) =>
          prevIndx === images.length - 1 ? 0 : prevIndx + 1
        );
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [images.length, playPause]);
  console.log(imgIndex, "third");

  const handlePrev = () => {
    setImgIndex((prevIndx) =>
      imgIndex === 0 ? images.length - 1 : prevIndx - 1
    );
  };
  const handleNext = () => {
    setImgIndex((prevIndx) =>
      imgIndex === images.length - 1 ? 0 : prevIndx + 1
    );
  };
  const goToIndex = (ind) => {
    setImgIndex(ind);
  };
  const autoPlayFunc = () => {
    setPlayPause(!playPause)
  };

  return (
    <div className="imgcontainer">
      <h3>{imgIndex + 1}</h3>
      <img alt="myImage" src={images[imgIndex]} style={{border : `${playPause ? '5px solid green' : '5px solid red'}`}}></img>
      <div className="dots">
        {images.map((element, index) => (
          <span
            key={element}
            className={index === imgIndex ? `${playPause ? "dot active" : "dot paused"}` : "dot"}
            onClick={() => goToIndex(index)}
          ></span>
        ))}
      </div>
      <div id="buttonGroup">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={autoPlayFunc}>{playPause === false ? "play" : "Pause"}</button>
      </div>
    </div>
  );
};

export default Carousel;
