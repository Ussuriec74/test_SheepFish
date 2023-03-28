import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, selectFilter } from "redux/products/selectors";
import { ProductsListItem } from 'components/ProductsListItem/ProductsListItem';


export const ProductsList = () => {
  const items = useSelector(selectProducts);
  // const filter = useSelector(selectFilter);

  // const getFilteredProducts = (items, filter) => {
    
  //   return items.filter(product =>
  //     product.name.toLowerCase().includes(filter.toLowerCase()));
  // }

  // const filteredProducts = getFilteredProducts(items, filter);  
  

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
      {items.map(({ id, title, description, price, photo, rating, stock, category }) => (
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
