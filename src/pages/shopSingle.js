import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../store/actions/cartItems";
import { ScrollToTop } from "../plugins/custom";

const ShopSingle = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  const fetchSingleProduct = async () => {
    try {
      const res = await axios.get(`/api/v1/product/${productId}`);
      setProduct(res?.data?.data?.data?.product);
    } catch (err) {
      console.log(
        `Unhandled Error in fetching product with id ${productId}. Error: ${err}`
      );
    }
  };
  const { products } = useSelector((state) => state.productsReducer);
  const { items } = useSelector((state) => state.cartReducer);
  const productCount = items.find((i) => i._id === productId)?.quantity;
  const handleAddToCart = () => {
    if (productCount) return;
    if (product) {
      dispatch(addToCart({ ...product }));
    }
  };

  function handleRemoveFromCart(itemId) {
    dispatch(removeFromCart(itemId));
  }

  const handleCountPlus = () => {
    if (!productCount) return handleAddToCart();
    if (product) {
      dispatch(updateQuantity(productId, productCount + 1));
    }
  };

  const handleCountMinus = () => {
    if (product && productCount && productCount > 0) {
      dispatch(updateQuantity(productId, productCount - 1));
    }
    if (product && productCount === 1) return handleRemoveFromCart(productId);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productId]);
  return (
    <>
      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <Link to="/">Home</Link> <span class="mx-2 mb-0">/</span>
              <Link to="/shop">Shop</Link> <span class="mx-2 mb-0">/</span>
              <strong class="text-black">{product?.name}</strong>
            </div>
          </div>
        </div>
      </div>
      {product && (
        <div class="site-section">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="item-entry">
                  <a href="#" class="product-item md-height bg-gray d-block">
                    <img
                      src={`${product?.image}`}
                      alt="Image"
                      class="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <h2 class="text-black dr-single-product-title">
                  {product?.name}
                </h2>
                <div class="dr-single-page-product-badge">
                  {product?.categoryId.name}
                </div>
                <p>{product.description}</p>
                <p>
                  <strong class="text-primary h4">{product.price} UZS</strong>
                </p>
                <div class="mb-1 d-flex">
                  <label for="option-sm" class="d-flex mr-3 mb-3">
                    <span
                      class="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-sm" name="shop-sizes" />
                    </span>
                    <span class="d-inline-block text-black">Small</span>
                  </label>
                  <label for="option-md" class="d-flex mr-3 mb-3">
                    <span
                      class="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-md" name="shop-sizes" />
                    </span>
                    <span class="d-inline-block text-black">Medium</span>
                  </label>
                  <label for="option-lg" class="d-flex mr-3 mb-3">
                    <span
                      class="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-lg" name="shop-sizes" />
                    </span>
                    <span class="d-inline-block text-black">Large</span>
                  </label>
                  <label for="option-xl" class="d-flex mr-3 mb-3">
                    <span
                      class="d-inline-block mr-2"
                      style={{ top: "-2px", position: "relative" }}
                    >
                      <input type="radio" id="option-xl" name="shop-sizes" />
                    </span>
                    <span class="d-inline-block text-black"> Extra Large</span>
                  </label>
                </div>
                <div class="mb-5">
                  <div class="input-group mb-3" style={{ maxWidth: "120px" }}>
                    <div class="input-group-prepend">
                      <button
                        onClick={handleCountMinus}
                        class="btn btn-outline-primary js-btn-minus"
                        type="button"
                      >
                        &minus;
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control text-center"
                      value={productCount || 0}
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <div class="input-group-append">
                      <button
                        onClick={handleCountPlus}
                        class="btn btn-outline-primary js-btn-plus"
                        type="button"
                      >
                        &#43;
                      </button>
                    </div>
                  </div>
                </div>
                <p>
                  <button
                    onClick={handleAddToCart}
                    class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
                  >
                    Add To Cart
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div class="site-section block-3 site-blocks-2">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7 site-section-heading text-center pt-4">
              <h2>Featured Products</h2>
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
                      <img
                        onClick={ScrollToTop}
                        src={`${p.image}`}
                        alt="Image"
                        class="img-fluid"
                      />
                    </Link>
                    <h2 class="item-title">
                      <div onClick={ScrollToTop}>
                        <Link to={`/product/${p._id}`}>{p.name}</Link>
                      </div>
                    </h2>
                    <strong class="item-price">{p.price} UZS</strong>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSingle;
