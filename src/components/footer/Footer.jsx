import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HashLink } from "react-router-hash-link";

const Footer = () => {

  useGSAP(() => {
    gsap.from(".footer-cont > div", {
      opacity: 0,
      y: 80,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 85%",
      }
    });
  });

  return (
    <footer className="footer noise">
      <div className="footer-cont">

        {/* Branding */}
        <div className="brand">
          <h2>PetLovers</h2>
          <p>
            Best place to learn and share valuable about our pets!
          </p>
          <span className="availability">
            ✔ Available for consultations
          </span>
        </div>

        {/* Quick Links */}
        <div className="links">
          <h3>Navigation</h3>
          <Link className="a" to="/">Home</Link>
          <Link className="a" to="/about">About</Link>
          <HashLink className="a" to="/#categories">Pets</HashLink>
          <Link className="a" to="/contact">Contact</Link>
          <Link className="a" to="/blog">Blog</Link>
        </div>

        {/* Options Platforms */}
        <div className="options">
          <h3>Looking for</h3>
          <a href="#" className="a">Getting Started</a>
          <a href="#" className="a">Pet Health & Care</a>
          <a href="#" className="a">Nutrition & Food</a>
        </div>

        {/* Social */}
        <div className="social">
          <h3>Contact</h3>
          <a className="a" href="#">Email</a>
                    
        </div>

      </div>

      <div className="bottom">
        <p>© {new Date().getFullYear()} Seenne — Designed & Developed by Me</p>
      </div>
    </footer>
  );
};

export default Footer;
