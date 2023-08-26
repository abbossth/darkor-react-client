import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../plugins/custom";

const Collections = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);
  return (
    <section id="categories" className="site-section">
      <div className="container">
        <div className="title-section mb-5">
          <h2 className="text-uppercase">
            <span className="d-block">Discover</span> The Collections
          </h2>
        </div>
        <div className="row">
          {categories &&
            categories?.slice(0, 12)?.map((c, idx) => {
              return (
                <div key={idx} className="col-lg-4 col-md-6 item-entry mb-4">
                  <Link
                    onClick={ScrollToTop}
                    to={`/shop?categoryId=${c._id}`}
                    className="product-item category-item md-height bg-gray d-block"
                  >
                    <span className="product-category">{c.name}</span>
                    <img src={`${c.image}`} alt="Image" className="img-fluid" />
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
