const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
  message: false,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      if (!state.cart.includes(payload)) {
        state.cart.push(payload);
        state.message = false;
      } else {
        state.message = true;
      }
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
