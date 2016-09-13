import React from 'react';

const resultsList = results => {
	let listItems = [];
	for (let title in results) {
		listItems.push(<li key={ title }>{ title }</li>)
	}
	return listItems;
};

export default ({ results }) => (
	<section className="Info">
		<ul>
			{ resultsList(results) }
		</ul>
	</section>
);