import { createAsyncThunk } from "@reduxjs/toolkit";

import { products } from 'data/products';

export const getProducts = createAsyncThunk("products/getAll", async (_, thunkAPI) => {
  try {
    return products;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, thunkAPI) => {
    try {
      return products.push(product);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      products.filter(product => product.id !== productId);
      return productId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// export const changeFilterStatus = createAsyncThunk(
//   "products/changeFilterStatus",
//   async 
// )
