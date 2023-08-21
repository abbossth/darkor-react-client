import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const location = useLocation();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div class="site-mobile-menu">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-logo">
          <a href="index.html" class="js-logo-clone">
            DARKOR
          </a>
        </div>
        <div class="site-mobile-menu-close ">
          <span class="ion-ios-close js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body">
        <ul class="site-nav-wrap">
          <li
            class={`has-children ${location.pathname === "/" ? "active" : ""}`}
          >
            <span
              class={`arrow-collapse ${!subMenuOpen ? "collapsed" : ""}`}
              data-toggle="collapse"
              data-target="#collapseItem0"
              onClick={() => setSubMenuOpen(!subMenuOpen)}
            ></span>
            <Link to="/">Home</Link>
            <ul
              class={`collapse ${subMenuOpen ? "show" : ""}`}
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

          <li class={`${location.pathname === "/shop" ? "active" : ""}`}>
            <Link to="/shop">Shop</Link>
          </li>
          <li class={`${location.pathname === "/contact" ? "active" : ""}`}>
            <Link to="contact.html">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
