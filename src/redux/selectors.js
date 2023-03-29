export const selectProducts = state => state.products.items;

export const selectFilter = state => state.products.filter;

export const selectStatusFilter = state => state.filters.status;

export const selectIsLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;