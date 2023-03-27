import { products } from 'data/products';

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};

export const addProduct = (product) => {
  return products.push(product);
};

export const deleteProduct = (productId) => {
  return products.filter(product => product.id !== productId);
};
