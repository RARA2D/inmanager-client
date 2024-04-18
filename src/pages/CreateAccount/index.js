import { useState } from 'react'

function CreateAccount({ submitNewAccount }) {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [userName, setUserName] = useState();
	const [password, setPassword] = useState();

	const submitAccount = async(e) => {
		e.preventDefault();
		submitNewAccount({ firstName, lastName, userName, password })
	}

  return (
    <div className="App">
			<h1>
				Create an Account
			</h1>
			<form onSubmit={submitAccount}>
				<div className='form-inner'>
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" onChange={e => setUserName(e.target.value)}/>
					<label for="firstName">First Name:</label>
					<input type="text" id="firstName" name="firstName" onChange={e => setFirstName(e.target.value)}/>
					<label for="lastName">Last Name:</label>
					<input type="text" id="lastName" name="lastName" onChange={e => setLastName(e.target.value)}/>
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

export default CreateAccount;