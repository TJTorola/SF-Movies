import React from 'react';

import Map           from './map';
import Info          from './info';
import Search        from './search';
import SearchResults from './search_results';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			locations: [],
			markers: [],
			selected: {},
			query: "",
			results: []
		}
	}

	setQuery() {

	}

	selectMovie() {

	}

	render() {
		let { locations, markers, selected, results } = this.state;

		return (
			<div className="App">
				<Map
					markers={ markers } 
					selectMovie={ this.selectMovie } />
				<Info
					selected={ selected } />
				<Search
					setQuery={ this.setQuery } />
				<SearchResults
					results={ results } />
			</div>
		)
	}
}