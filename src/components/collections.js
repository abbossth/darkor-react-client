import React from "react";
import ModelPhoto4 from "../assets/images/model_4.png";
import ModelPhoto5 from "../assets/images/model_5.png";
import ModelPhoto6 from "../assets/images/model_6.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Collections = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);
  return (
    <section id="categories" class="site-section">
      <div class="container">
        <div class="title-section mb-5">
          <h2 class="text-uppercase">
            <span class="d-block">Discover</span> The Collections
          </h2>
        </div>
        <div class="row">
          {categories?.map((c) => {
            return (
              <div class="col-lg-4 col-md-6 item-entry mb-4">
                <Link
                  to={`/product/${c._id}`}
                  class="product-item category-item md-height bg-gray d-block"
                >
                  <span class="product-category">{c.name}</span>
                  <img src={`${c.image}`} alt="Image" class="img-fluid" />
                </Link>
              </div>
            );
          })}
          {/* <div class="col-lg-8">
            <div class="product-item sm-height full-height bg-gray">
              <a href="#" class="product-category">
                {categories[0]?.name} <span>25 items</span>
              </a>
              <img
                src={`${categories[0]?.image}`}
                alt="Image"
                class="img-fluid"
                style={{ backgroundSize: "cover" }}
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="product-item sm-height bg-gray mb-4">
              <a href="#" class="product-category">
                {categories[1].name} <span>25 items</span>
              </a>
              <img
                src={`${categories[1]?.image}`}
                alt="Image"
                class="img-fluid"
              />
            </div>

            <div class="product-item sm-height bg-gray">
              <a href="#" class="product-category">
                {categories[2]?.name} <span>25 items</span>
              </a>
              <img
                src={`${categories[2]?.image}`}
                alt="Image"
                class="img-fluid"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Collections;
