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
			movies: {},
			selected: null,
			results: [],
			markers: {}
		}

		this.setQuery = this.setQuery.bind(this);
		this.selectMovie = this.selectMovie.bind(this);
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
		let results = [];

		for (let title in movies) {
			if (query === "" || title.toLowerCase().includes(query)) {
				results.push(title);
			}
		}

		this.setState({ results })
	}

	selectMovie(title) {
		let app = this
		return () => {
			app.setState({
				selected: app.state.movies[title]
			})
		}
	}

	render() {
		let { movies, markers, selected, results } = this.state;
		let { setQuery, selectMovie } = this;

		return (
			<div className="App">
				<Map
					selected={ selected } />
				<Info
					selectMovie={ selectMovie }
					results={ results } 
					selected={ selected } />
				<Search
					setQuery={ setQuery } />
			</div>
		)
	}
}