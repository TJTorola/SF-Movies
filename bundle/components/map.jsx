import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component {
	componentDidMount() {
		let map = ReactDOM.findDOMNode(this.refs.map);
		let options = {
			center: { lat: 37.699, lng: -122.313 },
			zoom: 11
		};

		this.map = new google.maps.Map(map, options);
	}

	render() {
		return (
			<div className="Map">
				<div className="MapView" ref="map"/>
			</div>
		);
	}
}

export default Map;