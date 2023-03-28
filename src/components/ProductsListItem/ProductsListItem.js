import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'redux/products/operations';
import { DeleteBtn } from 'components/ProductsListItem/ProductsListItem.styled'

export const ProductsListItem = ({
  id,
  title,
  description,
  price,
  photo,
  rating,
  stock,
  category }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteProduct(id))
 
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{photo}</td>
        <td>{rating}</td>
        <td>{stock}</td>
        <td>{category}</td>
        <td>
          <DeleteBtn onClick={handleDelete}>
            <MdDelete />
          </DeleteBtn>
        </td>
      </tr>

    </tbody>
  );
}
