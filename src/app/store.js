// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../auth/ProductSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
