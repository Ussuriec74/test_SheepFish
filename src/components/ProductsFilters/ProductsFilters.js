import { useSelector, useDispatch } from "react-redux";
import { Button } from "components/Button/Button";
import { statusFilters } from "redux/constants";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "redux/filtersSlise";
import { Box } from "components/Box";
import { Filter } from "components/Filter/Filter";



export const ProductsFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <Box display="flex" flexDirection="column" gridGap={3}>
      <Filter />
      <h3>Сортувати за:</h3>
      <Button
        selected={filter === statusFilters.id}
        onClick={() => handleFilterChange(statusFilters.id)}
      >
        ID
      </Button>
      <Button
        selected={filter === statusFilters.title}
        onClick={() => handleFilterChange(statusFilters.title)}
      >
        Title
      </Button>
      <Button
        selected={filter === statusFilters.description}
        onClick={() => handleFilterChange(statusFilters.description)}
      >
        Description
      </Button>
      <Button
        selected={filter === statusFilters.price}
        onClick={() => handleFilterChange(statusFilters.price)}
      >
        Price
      </Button>
      <Button
        selected={filter === statusFilters.photo}
        onClick={() => handleFilterChange(statusFilters.photo)}
      >
        Photo
      </Button>
      <Button
        selected={filter === statusFilters.rating}
        onClick={() => handleFilterChange(statusFilters.rating)}
      >
        Rating
      </Button>
      <Button
        selected={filter === statusFilters.stock}
        onClick={() => handleFilterChange(statusFilters.stock)}
      >
        Stock
      </Button>
      <Button
        selected={filter === statusFilters.category}
        onClick={() => handleFilterChange(statusFilters.category)}
      >
        Category
      </Button>
    </Box>
  );
};