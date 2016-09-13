import React from 'react';

import Map           from './map';
import Info          from './info';
import Search        from './search';
import SearchResults from './search_results';

export default () => (
	<div>
		<Map />
		<Info />
		<Search />
		<SearchResults />
	</div>
);