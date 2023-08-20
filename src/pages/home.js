import { useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { products } = useSelector((state) => state.productsReducer);
  const { categories } = useSelector((state) => state.categoriesReducer);

  useEffect(() => {
    console.log("products", products);
    console.log("categories", categories);
  }, [products, categories]);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
export default Home;
