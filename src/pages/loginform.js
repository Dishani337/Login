import React, { useState } from 'react';
import loginform from './loginfrom.css';

export default function LoginFrom({ Login, error }) {
	const [ details, setDetails ] = useState({ username: '', password: '' });

	// const handleSubmit = (e) => {
	//   e.preventDefault();
	//  if(!username || !password){
	//    alert("Username and Password can not be blank ")
	//  }else {
	//    console.log(username , password )

	//  }
	const handleSubmit = (e) => {
		e.preventDefault();

		Login(details);
	};

	return (
		<div className="container">
			<h1>Login From</h1>
			<form onSubmit={handleSubmit}>
				{/* {error !== '' ? (
          <p
            style={{
              backgroundColor: '#FDEDEC',
              color: '#E74C3C',
              padding: 10,
            }}
          >
            {error}
          </p>
        ) : (
          ''
        )} */}

				<div className="form-control">
					<label>Username</label>
					<input
						type="text"
						name="username"
						value={details.username}
						onChange={(e) => setDetails({ ...details, username: e.target.value })}
					/>
				</div>
				<div className="form-control">
					<div className="password">
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={details.password}
							onChange={(e) => setDetails({ ...details, password: e.target.value })}
						/>{' '}
					</div>
				</div>
				<div className="form-control">
					{/* <button type="submit" onClick={() => history.push('/src/pages/dashboard.js')} */}

					<button className="login-button" type="submit" value="Login">
						LOGIN
					</button>
				</div>
			</form>
		</div>
	);
}
