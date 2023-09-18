import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
import './authPage.css'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className='main'>
      <header></header>
      <main>
      {showLogin ? (
        <LoginForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>
        ) : (
          <SignUpForm setUser={setUser} showLogin={showLogin} setShowLogin={setShowLogin}/>
          )}
      </main>
      <footer></footer>
    </div>
  );
}
