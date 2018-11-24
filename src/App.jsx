import React, { Component } from 'react';
import SearchInput from './components/SearchInput/SearchInput';
import List from './components/List/List';
import Preview from './components/Preview/Preview';
import './style.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      previewData: null,
    };
  }

  updateSearchValue = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  showPreview = (client) => {
    this.setState({ previewData: client });
  }

  render() {
    const { searchValue, previewData } = this.state;
    return (
      <div className="main">
        <SearchInput
          searchValue={searchValue}
          updateSearchValue={this.updateSearchValue}
        />
        <List
          searchValue={searchValue}
          showPreview={this.showPreview}
        />
        <Preview
          previewData={previewData}
        />
      </div>
    );
  }
}

export default App;
