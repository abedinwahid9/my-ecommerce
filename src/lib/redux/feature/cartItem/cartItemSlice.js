const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      state.cart.push(payload);
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
