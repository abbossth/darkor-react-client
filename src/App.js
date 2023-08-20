import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/home";
import Layout from "./layout/layout";
import Test from "./pages/test";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/jquery-ui.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/fonts/style.css";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
