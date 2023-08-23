import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/actions/cartItems";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, cartTotal } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log("items", items);

  function handleRemoveFromCart(itemId) {
    dispatch(removeFromCart(itemId));
  }

  const handleCountPlus = (id, count) => {
    dispatch(updateQuantity(id, count + 1));
  };

  const handleCountMinus = (id, count) => {
    if (id && count === 1) return handleRemoveFromCart(id);
    if (id && count > 0) {
      dispatch(updateQuantity(id, count - 1));
    }
  };

  return (
    <>
      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>
              <strong class="text-black">Cart</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <form class="col-md-12" method="post">
              <div class="site-blocks-table">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-price">Size</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-total">Total</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items &&
                      items?.map((i) => {
                        return (
                          <tr>
                            <td class="product-thumbnail">
                              <img
                                src={`${i.image}`}
                                alt="Image"
                                class="img-fluid"
                              />
                            </td>
                            <td class="product-name">
                              <h2 class="h5 text-black">{i.name}</h2>
                            </td>
                            <td>{i.price} UZS</td>
                            <td>{i.size}</td>
                            <td>
                              <div
                                class="input-group mb-3"
                                style={{ maxWidth: "120px" }}
                              >
                                <div class="input-group-prepend">
                                  <button
                                    onClick={() =>
                                      handleCountMinus(i._id, i.quantity)
                                    }
                                    class="btn btn-outline-primary js-btn-minus"
                                    type="button"
                                  >
                                    &minus;
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  class="form-control text-center"
                                  value={i.quantity}
                                  placeholder=""
                                  aria-label="Example text with button addon"
                                  aria-describedby="button-addon1"
                                />
                                <div class="input-group-append">
                                  <button
                                    onClick={() =>
                                      handleCountPlus(i._id, i.quantity)
                                    }
                                    class="btn btn-outline-primary js-btn-plus"
                                    type="button"
                                  >
                                    &#43;
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td>{i.total} UZS</td>
                            <td>
                              <span
                                onClick={() => handleRemoveFromCart(i._id)}
                                class="btn btn-primary height-auto btn-sm"
                              >
                                X
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-6">
                  <Link to="/shop">
                    <button class="btn btn-outline-primary btn-sm btn-block">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-6 pl-5">
              <div class="row justify-content-end">
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-12 text-right border-bottom mb-5">
                      <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <b class="text-black fw-bold">Total</b>
                    </div>
                    <div class="col-md-6 text-right">
                      <span class="text-black">{cartTotal} UZS</span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary btn-lg btn-block"
                        onclick="window.location='checkout.html'"
                      >
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
