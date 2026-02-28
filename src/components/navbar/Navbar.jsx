import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [menu, setMenu] = useState();
  const [Open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "main-dark";
  });
  const locate = useLocation();

  const handleMenuClick = () => {
    setOpen((prev) => !prev);
    setShowMenu((prev) => !prev);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "main-dark" ? "green-dark" : "main-dark"));
    // console.log("Switch", theme);
  };
  useEffect(() => {
    //navbar menu
    if (locate.pathname === "/") setMenu("Home");
    else if (locate.pathname.startsWith("/category")) setMenu("Categories");
    else if (locate.pathname === "/blog") setMenu("Blog");
    else if (locate.pathname === "/about") setMenu("About");
  }, [locate.pathname]);

  useEffect(() => {
    //toggling theme __ Applying the theme when component loads
    document.body.setAttribute("data-theme", theme);
    //saving the theme
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav>
      <div className="title">
        <Link to={"/"} className="a">
          <h1>PetLovers </h1>
        </Link>
        <i
          className={`fa-solid fa-xl i ${!Open ? "fa-bars" : "fa-xmark"}`}
          onClick={() => handleMenuClick()}
          tabIndex={-1}
        ></i>
      </div>

      <ul className={!showMenu ? "" : "active"}>
        <Link to={"/"} className="a">
          <li className={menu === "Home" ? "active" : ""}>Home</li>
        </Link>
        <HashLink to={"/#categories"} className="a">
          <li className={menu === "Categories" ? "active" : ""}>Pets</li>
        </HashLink>
        <Link to={"/blog"} className="a">
          <li className={menu === "Blog" ? "active" : ""}>Blog</li>
        </Link>
        <Link to={"/about"} className="a">
          <li className={menu === "About" ? "active" : ""}>About</li>
        </Link>
      </ul>
      <div className={`ctas ${!showMenu ? "" : "active"}`}>
        <h3 className="cta">Sign up</h3>
        <h3 className="cta2">Login</h3>
        <i className="i fa-xl fa-solid fa-gear" onClick={toggleTheme}></i>
        {/* this should toggle to light mode */}
      </div>
    </nav>
  );
};

export default Navbar;
