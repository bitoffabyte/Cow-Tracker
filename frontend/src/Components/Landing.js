// import { useContext } from 'react';
import { useAuth } from '../Context/AuthProvider';
import { useHistory } from 'react-router-dom';
const Landing = () => {
	// const firebase = useContext(FirebaseContext);
	// console.log(firebase);
	const history = useHistory();
	const { signin } = useAuth();
	return (
		<div>
			HHi there
			<button
				onClick={async () => {
					try {
						await signin();
						history.push('/home');
					} catch (e) {
						console.log(e);
					}
				}}
			>
				Signin
			</button>
		</div>
	);
};

export default Landing;
