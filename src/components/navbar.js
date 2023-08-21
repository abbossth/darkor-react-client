import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const bodyTag = document.getElementById("body");
  const handleMenuOpen = () => bodyTag.classList.toggle("offcanvas-menu");
  return (
    <>
      <div class="site-navbar bg-white py-2">
        <div class="search-wrap">
          <div class="container">
            <Link to="/" class="search-close js-search-close">
              <span class="icon-close2"></span>
            </Link>
            <form action="#" method="post">
              <input
                type="text"
                class="form-control"
                placeholder="Search keyword and hit enter..."
              />
            </form>
          </div>
        </div>

        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <div class="logo">
              <div class="site-logo">
                <Link to="/" class="js-logo-clone">
                  DARKOR
                </Link>
              </div>
            </div>
            <div class="main-nav d-none d-lg-block">
              <nav
                class="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul class="site-menu js-clone-nav d-none d-lg-block">
                  <li
                    class={`has-children ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link to="/">Home</Link>
                    <ul class="dropdown">
                      <li>
                        <Link to="/#categories">Categories</Link>
                      </li>
                      <li>
                        <Link to="/#popular-products">Popular Products</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    class={`${location.pathname === "/shop" ? "active" : ""}`}
                  >
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li
                    class={`${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="icons">
              <Link to="#" class="icons-btn d-inline-block js-search-open">
                <span class="icon-search"></span>
              </Link>
              <Link to="#" class="icons-btn d-inline-block">
                <span class="icon-heart-o"></span>
              </Link>
              <Link to="/cart" class="icons-btn d-inline-block bag">
                <span class="icon-shopping-bag"></span>
                <span class="number">2</span>
              </Link>
              <div
                onClick={handleMenuOpen}
                class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
              >
                <span class="icon-menu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
