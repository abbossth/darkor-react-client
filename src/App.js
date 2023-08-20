import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/home";
import Layout from "./layout/layout";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
