"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  counter: [],
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
