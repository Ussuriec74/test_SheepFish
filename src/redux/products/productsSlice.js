import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getProducts, addProduct, deleteProduct } from './operations';

const productsInitialState = {
  items: [],
  filter: '',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    }
  },
  extraReducers: buider => {
    buider
      .addCase(getProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        for (const item of state.items) {
          if (item.name === action.payload.name) {
            return alert(
              `${action.payload.name} is already in products`
            );
          }
        }
        state.items.push(action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const idx = state.items.findIndex(item => item.id === action.payload);
        console.log({idx, a: action.payload});
        state.items.splice(idx, 1);
      })
      .addMatcher(isAnyOf(
        getProducts.fulfilled,
        addProduct.fulfilled,
        deleteProduct.fulfilled
      ), state => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isAnyOf(
        getProducts.pending,
        addProduct.pending,
        deleteProduct.pending
      ), handlePending)
      .addMatcher(isAnyOf(
        getProducts.rejected,
        addProduct.rejected,
        deleteProduct.rejected
      ), handleRejected);
  }
});
export const productsReducer =  productsSlice.reducer;

export const {
  updateFilter
} = productsSlice.actions;