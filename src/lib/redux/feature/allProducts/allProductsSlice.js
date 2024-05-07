import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const productFetch = createAsyncThunk("productFetch", async () => {
  const res = await axios.get("/api/products");
  return res.data;
});

const initialState = {
  isLoading: false,
  allProducts: null,
  error: false,
};

const allProductsSlice = createSlice({
  name: "allProductsItem",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(productFetch.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(productFetch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.allProducts = payload;
    });
    builder.addCase(productFetch.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default allProductsSlice.reducer;
