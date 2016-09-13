import React from 'react';

const selectedInfo = (title, selected) => {
	if (!selected || selected.title != title) { return; }

	return (
		<div className="InfoSelected">
			<table>
				<tbody>
					<tr>
						<td className="u-text-left">
							<strong>
								Director
							</strong>
						</td>
						<td>
							{ selected.director }
						</td>
					</tr>
					<tr>
						<td className="u-text-left">
							<strong>
								Writer
							</strong>
						</td>
						<td>
							{ selected.writer }
						</td>
					</tr>
					<tr>
						<td className="u-text-left">
							<strong>
								Producer
							</strong>
						</td>
						<td>
							{ selected.productionCompany }
						</td>
					</tr>
					<tr>
						<td className="u-text-left">
							<strong>
								Year
							</strong>
						</td>
						<td>
							{ selected.year }
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

const resultsList = ({ results, selectMovie, selected }) => results.map(title => (
	<li 
		key={ title }
		onClick={ selectMovie(title) }>
		{ title }
		{ selectedInfo(title, selected) }
	</li>
));

export default (props) => (
	<section className="Info">
		<ul>
			{ resultsList(props) }
		</ul>
	</section>
);