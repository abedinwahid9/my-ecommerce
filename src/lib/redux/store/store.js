"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allProductsSlice from "../feature/allProducts/allProductsSlice";
import cartItemSlice from "../feature/cartItem/cartItemSlice";

const rootReducer = combineReducers({
  allProducts: allProductsSlice,
  carts: cartItemSlice,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
