import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-logo">
          <a href="index.html" className="js-logo-clone">
            DARKOR
          </a>
        </div>
        <div className="site-mobile-menu-close ">
          <span className="ion-ios-close js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body">
        <ul className="site-nav-wrap">
          <li
            className={`has-children ${location.pathname === "/" ? "active" : ""}`}
          >
            <span
              className={`arrow-collapse ${!subMenuOpen ? "collapsed" : ""}`}
              data-toggle="collapse"
              data-target="#collapseItem0"
              onClick={() => setSubMenuOpen(!subMenuOpen)}
            ></span>
            <Link to="/">Home</Link>
            <ul
              className={`collapse ${subMenuOpen ? "show" : ""}`}
              id="collapseItem0"
            >
              <li>
                <Link to="/#categories">Categories</Link>
              </li>
              <li>
                <Link to="/#popular-products">Popular Products</Link>
              </li>
            </ul>
          </li>

          <li className={`${location.pathname === "/shop" ? "active" : ""}`}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={`${location.pathname === "/contact" ? "active" : ""}`}>
            <Link to="contact.html">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
