import React, { useState } from 'react';
import './App.css';
import LoginFrom from './pages/loginform';
import { Dashboard } from './pages/dashboard';
// import Loginnew from './Loginnew';

function App() {
	// const adminUser ={
	//   password: '12345678',
	// }

	const [ user, setUser ] = useState({ username: '', password: '' });
	const [ error, setError ] = useState('');

	// Login method
	const Login = (details) => {
		console.log(details);
		if (!details.username || !details.password) {
			alert('Username and Password can not be blank ');
			setError('Enter full details');
		} else {
			console.log('loged in');
			setUser({ username: details.username });
			setError('');
		}
	};

	const Logout = () => {
		setUser({ username: '' });
	};
	return (
		<div>
			{user.username !== '' ? (
				<div>
					{/* dashboard page */}
					<Dashboard username={user.username} />
					{/* logout button */}
					<button onClick={Logout} className="button">
						{' '}
						LOGOUT
					</button>
				</div>
			) : (
				// LoginFrom
				<LoginFrom Login={Login} error={error} />
			)}
			{/* <Loginform2 /> */}
		</div>
	);
}

export default App;
