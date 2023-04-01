import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "redux/productsSlice";
import { selectFilter, selectStatusFilter } from 'redux/selectors';

import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';

export const Filter = () => {

  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const statusFilter = useSelector(selectStatusFilter);
  const handleFilterChange = event => dispatch(updateFilter(event.target.value));

  return (
    <FilterLabel>Find products by {statusFilter}
      <FilterInput
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </FilterLabel>
  );
};