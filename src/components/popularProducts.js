import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../plugins/custom";

const PopularProducts = () => {
  const { products } = useSelector((state) => state.productsReducer);
  return (
    <section id="popular-products" className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section mb-5 col-12">
            <h2 className="text-uppercase">Popular Products</h2>
          </div>
        </div>
        <div className="row">
          {products &&
            products?.slice(0, 6)?.map((p, idx) => {
              return (
                <div key={idx} className="col-lg-4 col-md-6 item-entry mb-4">
                  <Link
                    to={`/product/${p._id}`}
                    className="product-item md-height bg-gray d-block"
                    onClick={ScrollToTop}
                  >
                    <img src={`${p.image}`} alt="Image" className="img-fluid" />
                  </Link>
                  <h2 className="item-title" onClick={ScrollToTop}>
                    <Link to={`/product/${p._id}`}>{p.name}</Link>
                  </h2>
                  <strong className="item-price">{p.price} UZS</strong>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
