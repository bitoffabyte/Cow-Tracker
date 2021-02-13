import { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import firebase from 'firebase';
import 'firebase/database';

const Home = () => {
	const { currentUser } = useAuth();
	const [n, uN] = useState('');
	const [cows, updateCows] = useState([]);
	var database = firebase.database();
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
		}
	}, [currentUser]);
	return (
		<div className='dib'>
			<br />
			cow list
			<button>map</button>
			<br />
			{cows.map((i) => {
				console.log(i);
				return (
					<>
						<p>heart {i.heart}</p>
						<p>id {i.id}</p>
						<p>lat {i.lat}</p>
						<p>long {i.long}</p>
						<p>temp {i.temp}</p>
					</>
				);
			})}
			<br />
			add cow
			<input value={n} onChange={(e) => uN(e.target.value)} />
			<button onClick={addCow}>Add Cow</button>
		</div>
	);
};

export default Home;
