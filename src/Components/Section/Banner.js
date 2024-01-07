import React from "react";
import "./Main.css";
import '../../index.css';
const Banner = () => {
  return (
    <>
      <div class="main_page container1">
        <div id="title">
          <h1>
            AL <span>QUD's</span>
          </h1>
          <h1>
            <span>Risk Free </span>Publication
          </h1>
        </div>
        <p>
          We ensure your research work is protected and showcased to the world
          without any worries. Take the leap and share your work with
          confidence.
        </p>
        
        <div class="main_btns d-flex g-0">
          <a class="secondarybtn" href="/contact">
            Submit Now
          </a>
          <a class="primaryBtn" href="/contact">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Banner;
