// Reducer
const initialState = {
  items: [],
  cartTotal: 0,
  totalCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item is already in the cart
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        // If yes, update the quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  total: item.price * (item.quantity + 1),
                }
              : item
          ),
          cartTotal: state.cartTotal + existingItem.price,
          totalCount: state.totalCount + 1,
        };
      } else {
        // If no, add the item to the cart
        return {
          ...state,
          items: [
            ...state.items,
            { ...action.payload, quantity: 1, total: action.payload.price },
          ],
          cartTotal: state.cartTotal + action.payload.price,
          totalCount: state.totalCount + 1,
        };
      }

    case "REMOVE_FROM_CART":
      const existing = state.items.find((item) => item._id === action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
        cartTotal: state.cartTotal - existing.total,
        totalCount: state.totalCount - existing.quantity,
      };

    case "UPDATE_QUANTITY":
      const product = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (product?.quantity < action.payload.quantity) {
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id
              ? {
                  ...item,
                  quantity: action.payload.quantity,
                  total: item.price * action.payload.quantity,
                }
              : item
          ),
          cartTotal: state.cartTotal + product?.price,
          totalCount: state.totalCount + 1,
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id
              ? {
                  ...item,
                  quantity: action.payload.quantity,
                  total: item.price * action.payload.quantity,
                }
              : item
          ),
          cartTotal: state.cartTotal - product?.price,
          totalCount: state.totalCount - 1,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
