import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/actions/cartItems";
import { Link } from "react-router-dom";
import { ScrollToTop } from "../plugins/custom";

const Cart = () => {
  const { items, cartTotal, totalCount } = useSelector(
    (state) => state.cartReducer
  );
  const dispatch = useDispatch();

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
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>
              <strong className="text-black">Cart</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row mb-5">
            <form className="col-md-12" method="post">
              <div className="site-blocks-table">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Image</th>
                      <th className="product-name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product-price">Size</th>
                      <th className="product-quantity">Quantity</th>
                      <th className="product-total">Total</th>
                      <th className="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items &&
                      items?.map((i, idx) => {
                        return (
                          <tr key={idx} >
                            <td className="product-thumbnail">
                              <img
                                src={`${i.image}`}
                                alt="Image"
                                className="img-fluid"
                              />
                            </td>
                            <td className="product-name">
                              <h2 className="h5 text-black">{i.name}</h2>
                            </td>
                            <td>{i.price} UZS</td>
                            <td>{i.size}</td>
                            <td>
                              <div
                                className="input-group mb-3"
                                style={{ maxWidth: "120px" }}
                              >
                                <div className="input-group-prepend">
                                  <button
                                    onClick={() =>
                                      handleCountMinus(i._id, i.quantity)
                                    }
                                    className="btn btn-outline-primary js-btn-minus"
                                    type="button"
                                  >
                                    &minus;
                                  </button>
                                </div>
                                <input
                                  type="text"
                                  className="form-control text-center"
                                  value={i.quantity}
                                  placeholder=""
                                  aria-label="Example text with button addon"
                                  aria-describedby="button-addon1"
                                />
                                <div className="input-group-append">
                                  <button
                                    onClick={() =>
                                      handleCountPlus(i._id, i.quantity)
                                    }
                                    className="btn btn-outline-primary js-btn-plus"
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
                                className="btn btn-primary height-auto btn-sm"
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

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-6">
                  <Link to="/shop">
                    <button
                      className="btn btn-outline-primary btn-sm btn-block"
                      onClick={ScrollToTop}
                    >
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <b className="text-black fw-bold">Total</b>
                    </div>
                    <div className="col-md-6 text-right">
                      <span className="text-black">{cartTotal} UZS</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      {totalCount ? (
                        <Link
                          to={"/checkout"}
                          style={{ pointerEvents: totalCount ? "" : "none" }}
                        >
                          <button className="btn btn-primary btn-lg btn-block">
                            Proceed To Checkout
                          </button>
                        </Link>
                      ) : (
                        ""
                      )}
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
