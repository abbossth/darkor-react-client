import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../store/actions/products";
import { getAllCategories } from "../store/actions/categories";

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
    <div>
      <div>Layout</div>
      <Outlet />
    </div>
  );
};

export default Layout;
