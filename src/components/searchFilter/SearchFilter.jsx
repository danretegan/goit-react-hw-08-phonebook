import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filter-slice';
import { selectFilter } from '../../redux/selectors';
import { Form, Label, Input } from './SearchFilter.styled';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <Form>
      <Label>
        Find contact by name:
        <Input
          type="text"
          name="filter"
          placeholder="Search name..."
          value={filter}
          onChange={handleFilterChange}
        />
      </Label>
    </Form>
  );
};

export default SearchFilter;
