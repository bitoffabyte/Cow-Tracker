// import { useContext } from 'react';
import { useAuth } from '../Context/AuthProvider';
import { useHistory } from 'react-router-dom';
import img from '../Assets/signin.svg';
const Landing = () => {
	// const firebase = useContext(FirebaseContext);
	// console.log(firebase);
	const history = useHistory();
	const { signin, signOut } = useAuth();
	signOut();
	return (
		<div className='dib'>
			<img
				src={img}
				onClick={async () => {
					try {
						await signin();
						history.push('/home');
					} catch (e) {
						console.log(e);
					}
				}}
			></img>
		</div>
	);
};

export default Landing;
