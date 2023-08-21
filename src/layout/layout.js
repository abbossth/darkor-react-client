import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import Navbar from "../components/navbar";
import { getAllProducts } from "../store/actions/products";
import { getAllCategories } from "../store/actions/categories";
import Footer from "../components/footer";
import MobileNavbar from "../components/mobileNavbar";

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

  const bodyTag = document.getElementById("body");
  const handleMenuToggle = () => bodyTag.classList.toggle("offcanvas-menu");
  return (
    <div class="site-wrap">
      <MobileNavbar />
      <Navbar />
      <Outlet />
      <Footer />
      <div class="site-wrap-before" onClick={handleMenuToggle}></div>
    </div>
  );
};

export default Layout;
