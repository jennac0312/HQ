import { useContext, useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getUser } from './utilities/users-service';
// pages
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// components
import NavBar from './components/NavBar/NavBar';
// css
import './App.css';
import Loading from './pages/loading/Loading';
import Welcome from './pages/welcome/Welcome';
import Headquarters from './pages/headquarters/Headquarters';
import { AppContext } from './contexts/app_context';
import Nav from './components/nav/Nav';
import Ranks from './pages/ranks/Ranks';
import Operations from './pages/operations/Operations'
import Intelligence from './pages/intelligence/Intelligence'
import Missions from './pages/missions/Missions'
import Safehouse from './pages/safehouse/SafeHouse'
import Edit from './pages/edit/Edit';

function App() {
  // array destructuring
  // const [user, setUser] = useState(getUser());
  const { user, setUser, showNav, showPopUp, setQuizCategory } = useContext(AppContext)

  useEffect(() => {
    setUser( getUser() )
    setQuizCategory("")
  }, [])

  console.log('CURRENT USER', user)

  return (
    <main className='App'>
      {user ? (
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          { showNav && <Nav /> }
          <Routes>
            <Route path='/' element={<Loading />} />
            <Route path='/welcome' element={<Welcome />} />

            <Route path='/safehouse' element={<Safehouse />} />
            <Route path={`/safehouse/edit`} element={<Edit />} />
            {/* <Route path={`/safehouse/edit/${user._id}`} element={<Edit />} /> */}

            <Route path='/headquarters' element={<Headquarters />} />
            <Route path='/ranks' element={<Ranks />} />
            <Route path='/operations' element={<Operations />} />
            <Route path='/intelligence' element={<Intelligence />} />
            <Route path='/missions' element={<Missions />} />


            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />

            <Route path='/*' element={<h1> You are off course agent {user.name} <Link to='/headquarters'>Return to hq</Link></h1>} />
          </Routes>
        </>
      ) : (
        // <AuthPage setUser={setUser} />
        <Routes>
          <Route path='/' element={<Loading />} />
          <Route path='/authorize' element={<AuthPage setUser={setUser}/>} />
          {/* <Route path='/*' element={<AuthPage setUser={setUser}/>} /> */}
          <Route path='/*' element={<h1>Off course agent</h1>} />
        </Routes>
      )}
    </main>
  );
}

export default App;