import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import List from './components/List';

class App extends Component {
	constructor(props) {
			super(props);
			this.state = {
					searchValue: ''
			}
			this.updateSearchValue = this.updateSearchValue.bind(this);
	}

	updateSearchValue(event) {
			this.setState({ searchValue: event.target.value});
			//console.log(event.target.value);
	}

	render() {
			return (
					<React.Fragment>
							<SearchInput searchValue={this.state.searchValue} updateSearchValue={this.updateSearchValue} />
							<List searchValue={this.state.searchValue} />
							{/*
							<Preview />*/}
					</React.Fragment>
			);
	};
}

export default App;
