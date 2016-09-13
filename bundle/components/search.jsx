import React from 'react';

import Input from 'modules/input';

const input = setQuery => event => {
	setQuery(event.target.value);
}

export default ({ setQuery }) => (
	<section className="Search">
		<Input id="query" placeholder="Search Movies" type="text" 
			onChange={ input(setQuery) } />
	</section>
)