import React from "react";
import ModelPhoto from "../assets/images/model_3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div class="site-blocks-cover" data-aos="fade">
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto order-md-2 align-self-start">
            <div class="site-block-cover-content">
              <h2 class="sub-title">#Yangi Yozgi To'plam 2023</h2>
              <h1>Arrivals Sales</h1>
              <p>
                <Link to="/shop" class="btn btn-black rounded-0">
                  Shop Now
                </Link>
              </p>
            </div>
          </div>
          <div class="col-md-6 order-1 align-self-end">
            <img src={ModelPhoto} alt="Image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
