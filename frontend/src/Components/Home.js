import React from 'react';
import { useAuth } from '../Context/AuthProvider';

const Home = () => {
	const { currentUser } = useAuth();
	return (
		<div>
			{currentUser && currentUser.email}
			<br />
			cow list
			<button>map</button>
		</div>
	);
};

export default Home;
