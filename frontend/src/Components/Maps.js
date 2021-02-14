import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
const map = () => {
	return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 12, lng: 12 }} />;
};
const WrappedMap = withScriptjs(withGoogleMap(map));
const Maps = () => {
	return (
		<div
			style={{
				width: '80vw',
				height: '80vh',
				position: 'fixed',
				zIndex: '1000',
				margin: 'auto',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%,-50%)',
			}}
		>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBntelmXy5xNFFI0Ke9w6VrXOhsdR-1-io`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		</div>
	);
};

export default Maps;
