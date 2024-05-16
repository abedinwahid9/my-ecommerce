const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
  message: false,
  grandTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      const check = state.cart.find((item) => item._id === payload._id);

      if (check) {
        state.message = true;
        console.log("already add this products");
      } else {
        state.message = false;
        state.cart.push(payload);
      }
    },
    removeCart: (state, { payload }) => {
      const removeItem = state.cart.filter((item) => item.id !== payload);
      state.cart = removeItem;
    },
    cartQuantityIncrement: (state, { payload }) => {
      const findIndex = state.cart.findIndex((item) => item.id === payload);

      if (state.cart[findIndex].quantity < state.cart[findIndex].stock) {
        state.cart[findIndex].quantity += 1;
      }
      state.cart[findIndex].totalPrice =
        state.cart[findIndex].quantity * state.cart[findIndex].price;
    },
    cartQuantityDecrement: (state, { payload }) => {
      const findIndex = state.cart.findIndex((item) => item.id === payload);
      if (state.cart[findIndex].quantity > 1) {
        state.cart[findIndex].quantity -= 1;
      }
      state.cart[findIndex].totalPrice =
        state.cart[findIndex].quantity * state.cart[findIndex].price;
    },
    getTotal: (state, action) => {
      const total = state.cart.reduce((prev, curr) => {
        return prev + curr.totalPrice; // Return the accumulated value
      }, 0);

      state.grandTotalPrice = total; // Update the grandTotalPrice in the state
    },
  },
});

export const {
  addCart,
  removeCart,
  cartQuantityIncrement,
  cartQuantityDecrement,
  getTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
