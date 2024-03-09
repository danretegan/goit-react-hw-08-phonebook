import React from 'react';
import styles from './SearchFilter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find contact by name:
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </form>
  );
};

export default SearchFilter;
