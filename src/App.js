import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/home";
import Layout from "./layout/layout";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/fonts/style.css";
import Shop from "./pages/shop";
import Contact from "./pages/contact";
import ShopSingle from "./pages/shopSingle";
import Cart from "./pages/cart";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<ShopSingle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
