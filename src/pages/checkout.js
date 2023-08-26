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
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
              <a href="cart.html">Cart</a> <span className="mx-2 mb-0">/</span>
              <strong className="text-black">Checkout</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_companyname" className="text-black">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_companyname"
                      name="c_companyname"
                      placeholder="Ismingizni kiriting..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_companyname" className="text-black">
                      Phone number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_companyname"
                      name="c_companyname"
                      placeholder="Telefon raqamingizni kiriting..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label htmlFor="c_diff_address" className="text-black">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="c_diff_address"
                      name="c_diff_address"
                      placeholder="Street address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="c_order_notes" className="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Write your notes here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border">
                    <table className="table site-block-order-table mb-5">
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
                                  {i.name} <strong className="mx-2">x</strong>{" "}
                                  {i.quantity}
                                </td>
                                <td>{i.price * i.quantity} UZS</td>
                              </tr>
                            );
                          })}
                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td className="text-black font-weight-bold">
                            <strong>{cartTotal} UZS</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-lg btn-block"
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
