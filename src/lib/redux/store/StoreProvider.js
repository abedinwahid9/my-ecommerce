"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { useRef } from "react";

const StoreProvider = ({ children }) => {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
  }
  return (
    <div>
      <Provider store={storeRef.current}>{children}</Provider>
    </div>
  );
};

export default StoreProvider;
