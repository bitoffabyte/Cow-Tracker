import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import AuthProvider from './Context/AuthProvider';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Bg from './Components/bg';
function App() {
	return (
		<Router>
			<div className='App'>
				<Bg />
				<AuthProvider>
					<Switch>
						<Route path='/' exact>
							<Landing />
						</Route>
						<Route path='/home' exact>
							<Home />
						</Route>
					</Switch>
				</AuthProvider>
			</div>
		</Router>
	);
}

export default App;
