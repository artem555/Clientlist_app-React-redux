import React from 'react';

const SearchInput = ({ searchValue, updateSearchValue }) => {
return (
  <div>
    <input value={searchValue} onChange={updateSearchValue}/>
  </div>
  );
};

export default SearchInput;