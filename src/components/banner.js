import React from "react";
import ModelPhoto from "../assets/images/model_3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="site-blocks-cover" data-aos="fade">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto order-md-2 align-self-start">
            <div className="site-block-cover-content">
              <h2 className="sub-title">#Yangi Yozgi To'plam 2023</h2>
              <h1>Arrivals Sales</h1>
              <p>
                <Link to="/shop" className="btn btn-black rounded-0">
                  Shop Now
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 order-1 align-self-end">
            <img src={ModelPhoto} alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
