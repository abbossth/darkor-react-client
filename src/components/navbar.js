import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const bodyTag = document.getElementById("body");
  const handleMenuOpen = () => bodyTag.classList.toggle("offcanvas-menu");
  const { totalCount } = useSelector((state) => state.cartReducer);
  return (
    <>
      <div className="site-navbar bg-white py-2">
        <div className="search-wrap">
          <div className="container">
            <Link to="/" className="search-close js-search-close">
              <span className="icon-close2"></span>
            </Link>
            <form action="#" method="post">
              <input
                type="text"
                className="form-control"
                placeholder="Search keyword and hit enter..."
              />
            </form>
          </div>
        </div>

        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <Link to="/" className="js-logo-clone">
                  DARKOR
                </Link>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav
                className="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul className="site-menu js-clone-nav d-none d-lg-block">
                  <li
                    className={`has-children ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    <Link to="/">Home</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/#categories">Categories</Link>
                      </li>
                      <li>
                        <Link to="/#popular-products">Popular Products</Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`${location.pathname === "/shop" ? "active" : ""}`}
                  >
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li
                    className={`${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                  >
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="icons">
              <Link to="#" className="icons-btn d-inline-block js-search-open">
                <span className="icon-search"></span>
              </Link>
              <Link to="#" className="icons-btn d-inline-block">
                <span className="icon-heart-o"></span>
              </Link>
              <Link to="/cart" className="icons-btn d-inline-block bag">
                <span className="icon-shopping-bag"></span>
                <span className="number">{totalCount}</span>
              </Link>
              <div
                onClick={handleMenuOpen}
                className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
              >
                <span className="icon-menu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
