import React from 'react';

import Map           from './map';
import Info          from './info';
import Search        from './search';
import SearchResults from './search_results';

import { requestMovies, groupMovies } from 'helper';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: [],
			markers: [],
			selected: "",
			results: {}
		}
	}

	componentDidMount() {
		let promise = requestMovies();

		promise.done(response => {
			let movies = groupMovies(response);
			this.setState({ movies });
			this.setQuery("");
		});
	}

	setQuery(query) {
		let { movies } = this.state;
		query = query.toLowerCase();
		let results = {};

		for (let title in movies) {
			if (query === "" || title.toLowerCase().includes(query)) {
				results[title] = { 
					location   : movies[title].location,
					actorOne   : movies[title].actorOne,
					actorTwo   : movies[title].actorTwo,
					actorThree : movies[title].actorThree,
					funFact    : movies[title].funFact,
				};
			}
		}

		this.setState({ results })
	}

	selectMovie() {

	}

	render() {
		let { movies, markers, selected, results } = this.state;

		return (
			<div className="App">
				<Map
					markers={ markers } 
					selectMovie={ this.selectMovie } />
				<Info
					results={ results } />
				<Search
					setQuery={ this.setQuery } />
			</div>
		)
	}
}