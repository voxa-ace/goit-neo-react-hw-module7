import React from 'react';
import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Find contacts by name"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
