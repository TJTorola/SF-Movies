import React from 'react';

const resultsList = ({ results, selectMovie }) => results.map(title => (
	<li 
		key={ title }
		onClick={ selectMovie(title) }>
		{ title }
	</li>
));

export default (props) => (
	<section className="Info">
		<ul>
			{ resultsList(props) }
		</ul>
	</section>
);