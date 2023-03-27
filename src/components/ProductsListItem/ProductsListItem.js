import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'redux/products/operations';
import { DeleteBtn } from 'components/ProductsListItem/ProductsListItem.styled'
import { Box } from 'components/Box';

export const ProductsListItem = ({
  id,
  name,
  description,
  price,
  photo,
  rating,
  stock,
  category }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteProduct(id))
 
  return (
    <Box>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>{photo}</td>
        <td>{rating}</td>
        <td>{stock}</td>
        <td>{category}</td>
      </tr>
      <DeleteBtn onClick={handleDelete}>
        <MdDelete />
      </DeleteBtn>
    </Box>
  );
}
