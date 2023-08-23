import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <>
      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>{" "}
              <strong class="text-black">Thank You</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <span class="icon-check_circle display-3 text-success"></span>
              <h2 class="display-3 text-black">Thank you!</h2>
              <p class="lead mb-5">You order was successfuly completed.</p>
              <p>
                <Link
                  to="/shop"
                  class="btn btn-sm height-auto px-4 py-3 btn-primary"
                >
                  Back to shop
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
