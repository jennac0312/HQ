// LoginForm.jsx

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import './loginForm.css'

export default function LoginForm({ setUser, showLogin, setShowLogin }) {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/welcome')
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className='loginForm'>
      <div className='form-container' onSubmit={handleSubmit}>
        <form autoComplete='off'>
          <div>
          <label>Username:</label>
            <input
              type='text'
              name='username'
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type='password'
              name='password'
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <section>
            <div className="left">
            <span>Don't have an account?</span>
            <button className='submit'
          onClick={() => {
            setShowLogin(!showLogin);
          }}
          >
          {showLogin ? 'Log In' : 'Sign Up'}
        </button>
            </div>
            <div className="right">
            <button type='submit' className='submit'>LOG IN</button>

            </div>
          </section>
        </form>
      </div>
      <p className='error-message'>&nbsp;{error}</p>
    </div>
  );
}
