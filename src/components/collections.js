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
        </div>
      </div>
    </section>
  );
};

export default Collections;
