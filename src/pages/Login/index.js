import { useState } from 'react'

function Login({ submitNewLogin }) {
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();

	const submitLogin = async(e) => {
		e.preventDefault();
		submitNewLogin({ userName, password })
	}

  return (
    <div className="App">
			<h1>
				Login to Account
			</h1>
			<form onSubmit={submitLogin}>
				<div className='form-inner'>
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" onChange={e => setUserName(e.target.value)}/>
					<label for="password">Password:</label>
					<input type="text" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
					<button
						type="submit"
					>submit</button>
				</div>
			</form>
    </div>
  );
}

export default Login;