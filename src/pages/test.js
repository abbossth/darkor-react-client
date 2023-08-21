import React from "react";
import ModelPhoto from "../assets/images/model_3.png";

const Test = () => {
  return (
    <div class="site-wrap">
      <div class="site-navbar bg-white py-2">
        <div class="search-wrap">
          <div class="container">
            <a href="#" class="search-close js-search-close">
              <span class="icon-close2"></span>
            </a>
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
                <a href="index.html" class="js-logo-clone">
                  DARKOR
                </a>
              </div>
            </div>
            <div class="main-nav d-none d-lg-block">
              <nav
                class="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul class="site-menu js-clone-nav d-none d-lg-block">
                  <li class="has-children active">
                    <a href="index.html">Home</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#categories">Categories</a>
                      </li>
                      <li>
                        <a href="#popular-products">Popular Products</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="icons">
              <a href="#" class="icons-btn d-inline-block js-search-open">
                <span class="icon-search"></span>
              </a>
              <a href="#" class="icons-btn d-inline-block">
                <span class="icon-heart-o"></span>
              </a>
              <a href="cart.html" class="icons-btn d-inline-block bag">
                <span class="icon-shopping-bag"></span>
                <span class="number">2</span>
              </a>
              <a
                href="#"
                class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
              >
                <span class="icon-menu"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="site-blocks-cover" data-aos="fade">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto order-md-2 align-self-start">
              <div class="site-block-cover-content">
                <h2 class="sub-title">#New Summer Collection 2019</h2>
                <h1>Arrivals Sales</h1>
                <p>
                  <a href="#" class="btn btn-black rounded-0">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-6 order-1 align-self-end">
              <img src={ModelPhoto} alt="Image" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <section id="categories" class="site-section">
        <div class="container">
          <div class="title-section mb-5">
            <h2 class="text-uppercase">
              <span class="d-block">Discover</span> The Collections
            </h2>
          </div>
          <div class="row align-items-stretch">
            <div class="col-lg-8">
              <div class="product-item sm-height full-height bg-gray">
                <a href="#" class="product-category">
                  Women <span>25 items</span>
                </a>
                <img src="images/model_4.png" alt="Image" class="img-fluid" />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="product-item sm-height bg-gray mb-4">
                <a href="#" class="product-category">
                  Men <span>25 items</span>
                </a>
                <img src="images/model_5.png" alt="Image" class="img-fluid" />
              </div>

              <div class="product-item sm-height bg-gray">
                <a href="#" class="product-category">
                  Shoes <span>25 items</span>
                </a>
                <img src="images/model_6.png" alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="popular-products" class="site-section">
        <div class="container">
          <div class="row">
            <div class="title-section mb-5 col-12">
              <h2 class="text-uppercase">Popular Products</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 item-entry mb-4">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src="images/prod_2.png" alt="Image" class="img-fluid" />
              </a>
              <h2 class="item-title">
                <a href="#">Gray Shoe</a>
              </h2>
              <strong class="item-price">$20.00</strong>
            </div>
            <div class="col-lg-4 col-md-6 item-entry mb-4">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src="images/prod_3.png" alt="Image" class="img-fluid" />
              </a>
              <h2 class="item-title">
                <a href="#">Blue Shoe High Heels</a>
              </h2>
              <strong class="item-price">
                <del>$46.00</del> $28.00
              </strong>
            </div>

            <div class="col-lg-4 col-md-6 item-entry mb-4">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src="images/model_5.png" alt="Image" class="img-fluid" />
              </a>
              <h2 class="item-title">
                <a href="#">Denim Jacket</a>
              </h2>
              <strong class="item-price">
                <del>$46.00</del> $28.00
              </strong>

              <div class="star-rating">
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 item-entry mb-4">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src="images/prod_1.png" alt="Image" class="img-fluid" />
              </a>
              <h2 class="item-title">
                <a href="#">Leather Green Bag</a>
              </h2>
              <strong class="item-price">
                <del>$46.00</del> $28.00
              </strong>
              <div class="star-rating">
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
                <span class="icon-star2 text-warning"></span>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 item-entry mb-4">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src="images/model_1.png" alt="Image" class="img-fluid" />
              </a>
              <h2 class="item-title">
                <a href="#">Smooth Cloth</a>
              </h2>
              <strong class="item-price">
                <del>$46.00</del> $28.00
              </strong>
            </div>
            <div class="col-lg-4 col-md-6 item-entry mb-4">
              <a href="#" class="product-item md-height bg-gray d-block">
                <img src="images/model_7.png" alt="Image" class="img-fluid" />
              </a>
              <h2 class="item-title">
                <a href="#">Yellow Jacket</a>
              </h2>
              <strong class="item-price">$58.00</strong>
            </div>
          </div>
        </div>
      </section>

      <div class="site-blocks-cover inner-page py-5" data-aos="fade">
        <div class="container">
          <div class="row">
            <div class="col-md-6 ml-auto order-md-2 align-self-start">
              <div class="site-block-cover-content">
                <h2 class="sub-title">#New Summer Collection 2019</h2>
                <h1>New Shoes</h1>
                <p>
                  <a href="#" class="btn btn-black rounded-0">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
            <div class="col-md-6 order-1 align-self-end">
              <img src="images/model_6.png" alt="Image" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <footer class="site-footer custom-border-top">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h3 class="footer-heading mb-4">Promo</h3>
              <a href="#" class="block-6">
                <img
                  src="images/about_1.jpg"
                  alt="Image placeholder"
                  class="img-fluid rounded mb-4"
                />
                <h3 class="font-weight-light mb-0">
                  Finding Your Perfect Shirts This Summer
                </h3>
                <p>Promo from July 15 &mdash; 25, 2019</p>
              </a>
            </div>
            <div class="col-lg-5 ml-auto mb-5 mb-lg-0">
              <div class="row">
                <div class="col-md-12">
                  <h3 class="footer-heading mb-4">Quick Links</h3>
                </div>
                <div class="col-md-6 col-lg-4">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Sell online</a>
                    </li>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Shopping cart</a>
                    </li>
                    <li>
                      <a href="#">Store builder</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Mobile commerce</a>
                    </li>
                    <li>
                      <a href="#">Dropshipping</a>
                    </li>
                    <li>
                      <a href="#">Website development</a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                  <ul class="list-unstyled">
                    <li>
                      <a href="#">Point of sale</a>
                    </li>
                    <li>
                      <a href="#">Hardware</a>
                    </li>
                    <li>
                      <a href="#">Software</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </li>
                  <li class="phone">
                    <a href="tel://23923929210">+2 392 3929 210</a>
                  </li>
                  <li class="email">emailaddress@domain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>.
                <span>All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Test;