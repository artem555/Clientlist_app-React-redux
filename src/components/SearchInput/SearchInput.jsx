import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const SearchInput = ({ searchValue, updateSearchValue }) => (
  <div>
    <input value={searchValue} onChange={updateSearchValue} />
  </div>
);

SearchInput.propTypes = {
  searchValue: propTypes.string.isRequired,
  updateSearchValue: propTypes.func.isRequired,
};

export default SearchInput;
