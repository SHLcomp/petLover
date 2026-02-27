import React from "react";
import "./Hero.scss";
import horse from "../../assets/arabianHorse1.png";
import hummingBird from "../../assets/hummingbird4.png";
import { HashLink } from "react-router-hash-link";
// import dogs from "../../assets/german_shepherd2.png";
// import pigeon from "../../assets/pigeon2.png";

const Hero = () => {
  return (
    <div className="hero noise">
      <div className="img-cont">
        <img className="horse" src={horse} alt="" />
        <img className="bird" src={hummingBird} alt="" />
        {/* <img className="dogs" src={dogs} alt="" /> */}
        {/* <img className="pigeon" src={pigeon} alt="" /> */}
      </div>
      <div className="hero-txt">
        <span className="note">Seenne Blog</span>
        <h1>All about your <span className="span">pet </span>!</h1>
        <h1>Tame <span className="span">Love</span> Treat</h1>
        <p>
          Everything you need to know before adopting a pet! At{" "}
          <span className="span">PetLovers</span> we provide helpful information
          and personal tips for you and your pet.
        </p>
        <div className="cta-cont">
          <h4>Explore and read more about your pets!</h4>
          <div className="ctas">
            <HashLink className="a" to={"/#categories"}><h3 className="cta">Read about your pet!</h3></HashLink>
            <HashLink className="a" to={"/#quiz"}><h3 className="cta">Thinking to adopt?</h3></HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
