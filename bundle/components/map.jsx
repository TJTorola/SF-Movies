import React from 'react';
import ReactDOM from 'react-dom';

import { requestLocation } from 'helper';

class Map extends React.Component {
	constructor(props) {
		super(props);
		this.markers = [];
		this.addMarker = this.addMarker.bind(this);
		this.clearMarkers = this.clearMarkers.bind(this);
	}

	componentDidMount() {
		this.setMap();
	}

	componentWillUpdate(nextProps) {
		let { selected } = nextProps;

		this.requestMarkers(selected)
	}

	setMap() {
		let map = ReactDOM.findDOMNode(this.refs.map);
		let options = {
			center: { lat: 37.699, lng: -122.313 },
			zoom: 11
		};

		this.map = new google.maps.Map(map, options);
	}

	clearMarkers() {
		this.markers.forEach(marker => {
			marker.setMap(null);
		});

		this.markers = [];
	}

	requestMarkers(selected) {
		if (!selected) { return; }
		this.clearMarkers();

		selected.locations.forEach(location => {
			let promise = requestLocation(location.address);
			promise.done(this.addMarker)
		})
	}

	addMarker(location) {
		if (location.results.length === 0) { return; }
		location = location.results[0].geometry.location;

		let position = new google.maps.LatLng(location.lat, location.lng);
		let marker = new google.maps.Marker({ position, map: this.map });
		this.markers.push(marker);

		this.setState({ markers });
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