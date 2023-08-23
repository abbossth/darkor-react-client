import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../plugins/custom";

const Checkout = () => {
  const { items, cartTotal } = useSelector((state) => state.cartReducer);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [clientId, setClientId] = useState("");
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const createNewClient = async () => {
    try {
      const res = await axios.post("/api/v1/clients/create", {
        name,
        address,
        phone,
        message,
      });
      setClientId(res?.data?.data?.data?.client?._id);
    } catch (err) {
      console.log(`Unhandled Error while creating client ${err}`);
    }
  };

  const createNewOrder = async () => {
    try {
      const res = await axios.post("/api/v1/orders", {
        client: clientId,
        products,
      });
      setClientId(null);
      ScrollToTop();
      navigate("/thankyou", { replace: true });
    } catch (err) {
      console.log(`Unhandled Error while creating order ${err}`);
    }
  };

  useEffect(() => {
    let cartItems = [];
    items.forEach((i) =>
      cartItems.push({
        productId: i._id,
        count: i.quantity,
        color: i.color[0],
        size: i.size[0],
      })
    );
    setProducts(cartItems);
  }, [items]);

  useEffect(() => {
    if (clientId.length) {
      createNewOrder();
    }
  }, [clientId]);

  return (
    <>
      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>
              <a href="cart.html">Cart</a> <span class="mx-2 mb-0">/</span>
              <strong class="text-black">Checkout</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
              <h2 class="h3 mb-3 text-black">Billing Details</h2>
              <div class="p-3 p-lg-5 border">
                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_companyname" class="text-black">
                      Full Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_companyname"
                      name="c_companyname"
                      placeholder="Ismingizni kiriting..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_companyname" class="text-black">
                      Phone number <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_companyname"
                      name="c_companyname"
                      placeholder="Telefon raqamingizni kiriting..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_diff_address" class="text-black">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_diff_address"
                      name="c_diff_address"
                      placeholder="Street address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="c_order_notes" class="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Write your notes here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row mb-5">
                <div class="col-md-12">
                  <h2 class="h3 mb-3 text-black">Your Order</h2>
                  <div class="p-3 p-lg-5 border">
                    <table class="table site-block-order-table mb-5">
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        {items &&
                          items.map((i) => {
                            return (
                              <tr>
                                <td>
                                  {i.name} <strong class="mx-2">x</strong>{" "}
                                  {i.quantity}
                                </td>
                                <td>{i.price * i.quantity} UZS</td>
                              </tr>
                            );
                          })}
                        <tr>
                          <td class="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td class="text-black font-weight-bold">
                            <strong>{cartTotal} UZS</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div class="form-group">
                      <button
                        class="btn btn-primary btn-lg btn-block"
                        // onclick="window.location='thankyou.html'"
                        onClick={createNewClient}
                      >
                        Place Order
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

export default Checkout;
