import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const categoryDatas = createAsyncThunk("categoryDatas", async () => {
  const res = await axios.get("/api/categories");
  return res.data;
});

const initialState = {
  isLoading: false,
  categories: null,
  error: false,
};

const allCategorySlice = createSlice({
  name: "allCategory",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(categoryDatas.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(categoryDatas.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    });
    builder.addCase(categoryDatas.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default allCategorySlice.reducer;
