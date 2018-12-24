import React from 'react';
import propTypes from 'prop-types';
import './style.css';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  onUpdateSearchValue = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    const { searchValue } = this.state;
    const { onGetSearchableValue } = this.props;
    return (
      <div>
        <input
          value={searchValue}
          onChange={(e) => {
            onGetSearchableValue(e.target.value);
            this.onUpdateSearchValue(e);
          }}
        />
      </div>
    );
  }
}

SearchInput.propTypes = {
  onGetSearchableValue: propTypes.func.isRequired,
};

export default SearchInput;
