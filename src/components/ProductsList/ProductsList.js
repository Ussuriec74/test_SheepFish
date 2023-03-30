import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, selectStatusFilter, selectFilter } from "redux/selectors";
import { ProductsListItem } from 'components/ProductsListItem/ProductsListItem';
import { Box } from "components/Box";


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
    return items.filter(product =>
      product.description.toLowerCase().includes(filter.toLowerCase()));
  }

  const filteredProducts = getFilteredProducts(sortedProducts, filter);
 

  return (
    <Box>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Назва</th>
            <th>Опис</th>
            <th>Ціна</th>
            <th>Фото</th>
            <th>Рейтинг</th>
            <th>Сток</th>
            <th>Категорія</th>
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
      </table>
    </Box>
  );
};
