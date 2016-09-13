import { ajax } from 'jquery';

export const requestMovies = () => {
	return ajax({
		url: "https://data.sfgov.org/resource/wwmu-gmzc.json"
	});
}

export const groupMovies = movieLocations => {
	let movies = {};
	movieLocations.forEach(location => {
		let locationData = {
			address: location.locations,
			funFact: location.fun_facts,
			actorOne: location.actor_1,
			actorTwo: location.actor_2,
			actorThree: location.actor_3,
		}

		if (movies[location.title]) {
			movies[location.title].locations.push(locationData);
		} else {
			movies[location.title] = {
				title: location.title,
				director: location.director,
				writer: location.writer,
				distributor: location.distributor,
				productionCompany: location.production_company,
				year: location.release_year,
				locations: [locationData]
			};
		}
	});

	return movies;
}