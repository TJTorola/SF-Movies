import React from 'react';
import ReactDom from 'react-dom';

import App from './app.jsx';

document.addEventListener("DOMContentLoaded", () => {
	let rootEl = document.querySelector('#root');
	ReactDom.render(<App />, rootEl);
});