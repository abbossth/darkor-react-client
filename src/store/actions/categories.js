export const getAllCategories = (arr) => {
  return {
    type: "GET_ALL_CATEGORIES",
    payload: arr,
  };
};
