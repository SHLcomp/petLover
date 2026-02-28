import React from "react";
import "./AboutSection.scss";
import img from "../../assets/pigeon2.png"

const AboutSection = () => {
  return (
    <div className="aboutSection line">
      <div className="txt">
        <span className="note">About</span>
        <h1>
          We're <span className="span">PetLovers</span> team
        </h1>
        <p>
          We aim to spread and share beneficial information about pets to help
          people around the world to get to know their pets and help giving them
          a healthy and happy life.
        </p>
        <p>
          Our pets are living souls, we should take good care of them. Let's
          learn and share our experiences together!
        </p>
        <p>
          Do you want to share your knowledge with us?{" "}
          <span className="span">conact us now</span> and spread your knowledge!
        </p>
        <div className="ctas">
            <a href="#contact" className="a"><h3 className="cta">Contact Us</h3></a>
        </div>
      </div>
      <div className="img-cont">
        <div className="circle glow">
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
