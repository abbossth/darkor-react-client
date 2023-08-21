import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const { products } = useSelector((state) => state.productsReducer);
  return (
    <section id="popular-products" class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section mb-5 col-12">
            <h2 class="text-uppercase">Popular Products</h2>
          </div>
        </div>
        <div class="row">
          {products &&
            products?.slice(0, 6)?.map((p, idx) => {
              return (
                <div key={idx} class="col-lg-4 col-md-6 item-entry mb-4">
                  <Link
                    to={`/product/${p._id}`}
                    class="product-item md-height bg-gray d-block"
                  >
                    <img src={`${p.image}`} alt="Image" class="img-fluid" />
                  </Link>
                  <h2 class="item-title">
                    <Link to={`/product/${p._id}`}>{p.name}</Link>
                  </h2>
                  <strong class="item-price">{p.price} UZS</strong>
                </div>
              );
            })}
          {/* <div class="col-lg-4 col-md-6 item-entry mb-4">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
