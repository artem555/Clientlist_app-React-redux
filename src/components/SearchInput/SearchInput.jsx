import React from 'react';
import propTypes from 'prop-types';
import './style.css';

const SearchInput = ({ searchValue, onUpdateSearchValue }) => (
  <div>
    <input value={searchValue} onChange={onUpdateSearchValue} />
  </div>
);

SearchInput.propTypes = {
  searchValue: propTypes.string.isRequired,
  onUpdateSearchValue: propTypes.func.isRequired,
};

export default SearchInput;
