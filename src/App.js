import './App.css';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState()

  const submitNewAccount = ({ firstName, lastName, userName, password  }) => {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, userName, password }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const submitNewLogin = ({ userName, password  }) => {
    fetch(`http://localhost:8080/users?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUser(data[0])
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="App">
      <CreateAccount 
        submitNewAccount={submitNewAccount}  
      />
      {user ?
        <button
          onClick={() => setUser()}
        >Log Out</button>
          :
        <Login
          submitNewLogin={submitNewLogin}
        />
      }
    </div>
  );
}

export default App;
