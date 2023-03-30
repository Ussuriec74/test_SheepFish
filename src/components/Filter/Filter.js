import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "redux/productsSlice";
import { selectFilter } from 'redux/selectors';

import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {

  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const handleFilterChange = event => dispatch(updateFilter(event.target.value));

  return (
    <FilterLabel>Find products by 
      <FilterInput
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};