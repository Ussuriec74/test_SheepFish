import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'redux/operations';
import { DeleteBtn } from 'components/ProductsListItem/ProductsListItem.styled'
import { Link, useLocation } from 'react-router-dom';

export const ProductsListItem = ({
  id,
  title,
  description,
  price,
  thumbnail,
  rating,
  stock,
  category }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteProduct(id))
 
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td>
          <Link to={`/products/${id}`} state={{ from: location }}>
            <img src={thumbnail} alt={title} width={60} height={40}/>
          </Link>
        </td>
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
