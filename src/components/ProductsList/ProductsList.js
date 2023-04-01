import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, selectStatusFilter, selectFilter } from "redux/selectors";
import { ProductsListItem } from 'components/ProductsListItem/ProductsListItem';
import { Box } from "components/Box";
import { ProductTable } from "./ProductsList.styled";


export const ProductsList = () => {
  const items = useSelector(selectProducts);
  const statusFilter = useSelector(selectStatusFilter);
  const filter = useSelector(selectFilter);
  
  const sortedProducts = [...items];
  sortedProducts.sort((x, y) => {
    if (typeof (x[statusFilter]) === "string") {
      return x[statusFilter].localeCompare(y[statusFilter]);
    }
    return x[statusFilter] - y[statusFilter];
  });
  
  const getFilteredProducts = (items, filter) => {
    return items.filter((product) => {
   
      return String(product[statusFilter]).toLowerCase().includes(filter.toLowerCase())
    });
  };

  const filteredProducts = getFilteredProducts(sortedProducts, filter);

  return (
    <Box>
      <ProductTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Photo</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        {filteredProducts.map(({ id, title, description, price, thumbnail, rating, stock, category }) => (
          <ProductsListItem
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            thumbnail={thumbnail}
            rating={rating}
            stock={stock}
            category={category} />
        ))}
      </ProductTable>
    </Box>
  );
};
