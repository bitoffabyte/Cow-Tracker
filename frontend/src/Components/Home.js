import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import firebase from 'firebase';
import 'firebase/database';
import Loading from './Loading';
const Home = () => {
	const { currentUser } = useAuth();
	const [n, uN] = useState('');
	const [cows, updateCows] = useState([]);
	var database = firebase.database();
	const [l, uL] = useState(true);
	const checkData = () => {
		database
			.ref()
			.child('users/')
			.child(currentUser.uid)
			.get()
			.then(function (snapshot) {
				if (snapshot.exists()) {
					console.log(snapshot);
				} else {
					console.log('No data available');

					database.ref('users/' + currentUser.uid).set({
						username: currentUser.displayName,
						email: currentUser.email,
						cows: cows,
					});
				}
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	const addCow = () => {
		database.ref('cows/' + n).set({
			lat: 0,
			long: 0,
			heart: 0,
			temp: 0,
			id: n,
		});
		database
			.ref('users/' + currentUser.uid + '/cows')
			.push()
			.set({
				id: n,
				lat: 0,
				long: 0,
				heart: 0,
				temp: 0,
			});
	};
	useEffect(() => {
		if (currentUser) {
			checkData();
			database
				.ref('users/' + currentUser.uid + '/cows')
				.on('value', (snapshot) => {
					if (snapshot.exists()) {
						const notif = snapshot.val();
						updateCows([...Object.values(notif)]);
					}
				});
			uL(false);
		}
	}, [currentUser]);
	return (
		<div className='dib'>
			{l ? <Loading /> : null}
			<br />
			<p
				style={{
					display: 'block',
					margin: 'auto',
					textAlign: 'center',
					color: '#fff',
				}}
			>
				<h1>Cow List</h1>
			</p>
			<button className='btn'>map</button>
			<br />
			<div className='cows'>
				{cows.map((i) => {
					console.log(i);
					return (
						<div className='asas'>
							<p>Cow Name: {i.id}</p>

							<p>heart: {i.heart}</p>
							<p>lat: {i.lat}</p>
							<p>long: {i.long}</p>
							<p>temp: {i.temp}</p>
						</div>
					);
				})}
			</div>
			<br />
			<div
				style={{
					width: '80vw',
					margin: 'auto',
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<p style={{ color: 'white' }}>Add Cow</p>
				<input value={n} onChange={(e) => uN(e.target.value)} />
				<button className='btn' onClick={addCow}>
					Add Cow
				</button>
			</div>
		</div>
	);
};

export default Home;
