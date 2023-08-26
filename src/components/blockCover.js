import React from "react";
import CoverPhoto from "../assets/images/model_6.png";
import { Link } from "react-router-dom";

const BlockCover = () => {
  return (
    <div className="site-blocks-cover inner-page py-5" data-aos="fade">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto order-md-2 align-self-start">
            <div className="site-block-cover-content">
              <h2 className="sub-title">#New Summer Collection 2019</h2>
              <h1>New Shoes</h1>
              <p>
                <Link to="/shop" className="btn btn-black rounded-0">
                  Shop Now
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 order-1 align-self-end">
            <img src={CoverPhoto} alt="Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockCover;
