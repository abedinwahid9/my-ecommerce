"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allProductsSlice from "../feature/allProducts/allProductsSlice";
import cartItemSlice from "../feature/cartItem/cartItemSlice";
import allCategorySlice from "../feature/allCategory/allCategorySlice";

const rootReducer = combineReducers({
  allProducts: allProductsSlice,
  allCategories: allCategorySlice,
  carts: cartItemSlice,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
