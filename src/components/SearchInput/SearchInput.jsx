import React from 'react';
import './style.css';

const SearchInput = ({ searchValue, updateSearchValue }) => {
return (
  <div>
    <input value={searchValue} onChange={updateSearchValue}/>
  </div>
  );
};

export default SearchInput;
