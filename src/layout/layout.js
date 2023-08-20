import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import { getAllProducts } from "../store/actions/products";
import { getAllCategories } from "../store/actions/categories";
import Footer from "../components/footer";

const Layout = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`/api/v1/product`);
      dispatch(getAllProducts(res?.data?.data?.data?.filteredData));
    } catch (err) {
      throw new Error(`Unhandled Error while fetching products ${err}`);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`/api/v1/category`);
      dispatch(getAllCategories(res?.data?.data?.data?.categories));
      //   console.log(res?.data?.data?.data?.categories);
    } catch (err) {
      throw new Error(`Unhandled Error while fetching products ${err}`);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  return (
    <div class="site-wrap">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
