export const getAllProducts = (arr) => {
  return {
    type: "GET_ALL_PRODUCTS",
    payload: arr,
  };
};
