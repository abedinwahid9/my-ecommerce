const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    name: "mango",
    details: "mango,mustard oil,sweet and sour combination",
    price: "350",
    rating: 4.5,
    stock: 5,
    category: "single jar",
  },
  {
    id: 2,
    name: "mango 1",
    details: "mango,mustard oil,sweet and sour combination",
    price: "450",
    rating: 4.5,
    stock: 5,
    category: "single jar",
  },
  {
    id: 3,
    name: "mango 2",
    details: "mango,mustard oil,sweet and sour combination",
    price: "100",
    rating: 4.5,
    stock: 5,
    category: "package",
  },
  {
    id: 4,
    name: "mango 3",
    details: "mango,mustard oil,sweet and sour combination",
    price: "320",
    rating: 4.5,
    stock: 5,
    category: "package",
  },
  {
    id: 5,
    name: "mango 4",
    details: "mango,mustard oil,sweet and sour combination",
    price: "480",
    rating: 4.5,
    stock: 5,
    category: "single jar",
  },
  {
    id: 6,
    name: "mango 4",
    details: "mango,mustard oil,sweet and sour combination",
    price: "300",
    rating: 4.5,
    stock: 0,
    category: "package",
  },
  {
    id: 7,
    name: "mango 4",
    details: "mango,mustard oil,sweet and sour combination",
    price: "500",
    rating: 4.5,
    stock: 5,
    category: "single jar",
  },
];

const allProductsSlice = createSlice({
  name: "allProductsItem",
  initialState,
  reducers: {},
});

// export {} = allProductsSlice.actions
export default allProductsSlice.reducer;
