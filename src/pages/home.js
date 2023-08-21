import { useEffect } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/banner";
import Collections from "../components/collections";
import PopularProducts from "../components/popularProducts";
import BlockCover from "../components/blockCover";

const Home = () => {
  return (
    <div>
      <Banner />
      <Collections />
      <PopularProducts />
      <BlockCover />
    </div>
  );
};
export default Home;
