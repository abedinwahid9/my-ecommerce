const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  data: null,
  error: false,
};

const allCategorySlice = createSlice({
  name: "allCategory",
  initialState,
  reducers: {},
});

export default allCategorySlice.reducer;
