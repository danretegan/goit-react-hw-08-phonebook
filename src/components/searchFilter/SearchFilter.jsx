import React from 'react';
import styles from './SearchFilter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';
import { selectFilter } from '../../redux/selectors';

const SearchFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {

    dispatch(setFilter(event.target.value.trim()));
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
