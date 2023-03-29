import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, selectStatusFilter } from "redux/selectors";
import { ProductsListItem } from 'components/ProductsListItem/ProductsListItem';


export const ProductsList = () => {
  const items = useSelector(selectProducts);
  const filter = useSelector(selectStatusFilter);
  
  const sortedProducts = [...items];
  sortedProducts.sort((x, y) => {
    return x[filter] - y[filter]
  });

    
  

  return (
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
      {sortedProducts.map(({ id, title, description, price, photo, rating, stock, category }) => (
        <ProductsListItem
          key={id}
          id={id}
          title={title}
          description={description}
          price={price}
          photo={photo}
          rating={rating}
          stock={stock}
          category={category} />
      ))}
    </table>
  );
};
