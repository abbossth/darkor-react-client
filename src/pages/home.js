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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {categories &&
          categories.map((c) => (
            <div>
              <img src={c.image} alt={"category photo"} width={300} />
              <h3>{c.name}</h3>
            </div>
          ))}
      </div>
      <hr />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map((p) => (
            <div>
              <img src={p.image} alt={"product photo"} width={300} />
              <h3>{p.name}</h3>
              <p>{p.price} UZS</p>
              <p>{p.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Home;
