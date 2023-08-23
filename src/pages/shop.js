import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../plugins/custom";

const Shop = () => {
  const { products } = useSelector((state) => state.productsReducer);
  return (
    <>
      <div class="custom-border-bottom py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <Link to="/">Home</Link> <span class="mx-2 mb-0">/</span>
              <strong class="text-black">Shop</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-9 order-1">
              <div class="row align">
                <div class="col-md-12 mb-5">
                  <div class="float-md-left">
                    <h2 class="text-black h5">Shop All</h2>
                  </div>
                  <div class="d-flex">
                    <div class="dropdown mr-1 ml-md-auto">
                      <button
                        type="button"
                        class="btn btn-white btn-sm dropdown-toggle px-4"
                        id="dropdownMenuOffset"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Latest
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuOffset"
                      >
                        <a class="dropdown-item" href="#">
                          Men
                        </a>
                        <a class="dropdown-item" href="#">
                          Women
                        </a>
                        <a class="dropdown-item" href="#">
                          Children
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-5">
                {products &&
                  products?.slice(0, 6)?.map((p, idx) => {
                    return (
                      <div key={idx} class="col-lg-4 col-md-6 item-entry mb-4">
                        <Link
                          to={`/product/${p._id}`}
                          class="product-item md-height bg-gray d-block"
                        >
                          <img
                            onClick={ScrollToTop}
                            src={`${p.image}`}
                            alt="Image"
                            class="img-fluid"
                          />
                        </Link>
                        <h2 class="item-title">
                          <span onClick={ScrollToTop}>
                            <Link to={`/product/${p._id}`}>{p.name}</Link>
                          </span>
                        </h2>
                        <strong class="item-price">{p.price} UZS</strong>
                      </div>
                    );
                  })}
                {/* <div class="col-lg-6 col-md-6 item-entry mb-4">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img
                      src="images/prod_3.png"
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                  <h2 class="item-title">
                    <a href="#">Blue Shoe High Heels</a>
                  </h2>
                  <strong class="item-price">
                    <del>$46.00</del> $28.00
                  </strong>
                </div> */}
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="site-block-27">
                    <ul>
                      <li>
                        <a href="#">&lt;</a>
                      </li>
                      <li class="active">
                        <span>1</span>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">&gt;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 order-2 mb-5 mb-md-0">
              <div class="border p-4 rounded mb-4">
                <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">
                    Filter by Price
                  </h3>
                  <div
                    id="slider-range"
                    class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                  >
                    <div
                      class="ui-slider-range ui-corner-all ui-widget-header"
                      style={{ left: `${`15%`}`, width: `${`45.2%`}` }}
                    ></div>
                    <span
                      tabindex="0"
                      class="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: `${`15%`}` }}
                    ></span>
                    <span
                      tabindex="0"
                      class="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: `${`60.2%`}` }}
                    ></span>
                  </div>
                  <input
                    type="text"
                    name="text"
                    id="amount"
                    value={"$75 - $301"}
                    class="form-control border-0 pl-0 bg-white"
                    disabled=""
                  />
                </div>

                <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">
                    Categories
                  </h3>
                  <label for="c_sm" class="d-flex">
                    <input type="checkbox" id="c_sm" class="mr-2 mt-1" />
                    <span class="text-black">Men (2,319)</span>
                  </label>
                  <label for="c_md" class="d-flex">
                    <input type="checkbox" id="c_md" class="mr-2 mt-1" />
                    <span class="text-black">Woman (1,282)</span>
                  </label>
                  <label for="c_lg" class="d-flex">
                    <input type="checkbox" id="c_lg" class="mr-2 mt-1" />
                    <span class="text-black">Children (1,392)</span>
                  </label>
                </div>

                <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">
                    Size
                  </h3>
                  <label for="s_sm" class="d-flex">
                    <input type="checkbox" id="s_sm" class="mr-2 mt-1" />
                    <span class="text-black">Small (2,319)</span>
                  </label>
                  <label for="s_md" class="d-flex">
                    <input type="checkbox" id="s_md" class="mr-2 mt-1" />
                    <span class="text-black">Medium (1,282)</span>
                  </label>
                  <label for="s_lg" class="d-flex">
                    <input type="checkbox" id="s_lg" class="mr-2 mt-1" />
                    <span class="text-black">Large (1,392)</span>
                  </label>
                </div>

                <div class="mb-4">
                  <h3 class="mb-3 h6 text-uppercase text-black d-block">
                    Color
                  </h3>
                  <a href="#" class="d-flex color-item align-items-center">
                    <span class="bg-danger color d-inline-block rounded-circle mr-2"></span>
                    <span class="text-black">Red (2,429)</span>
                  </a>
                  <a href="#" class="d-flex color-item align-items-center">
                    <span class="bg-success color d-inline-block rounded-circle mr-2"></span>
                    <span class="text-black">Green (2,298)</span>
                  </a>
                  <a href="#" class="d-flex color-item align-items-center">
                    <span class="bg-info color d-inline-block rounded-circle mr-2"></span>
                    <span class="text-black">Blue (1,075)</span>
                  </a>
                  <a href="#" class="d-flex color-item align-items-center">
                    <span class="bg-primary color d-inline-block rounded-circle mr-2"></span>
                    <span class="text-black">Purple (1,075)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
