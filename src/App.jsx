// import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { getUser } from './utilities/users-service';
// // pages
// import AuthPage from './pages/AuthPage/AuthPage';
// // import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
// // import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// // components
// // import NavBar from './components/NavBar/NavBar';
// // css
// import './App.css';

// import axios from 'axios';
// import './App.css';
// import { useContext } from 'react';
// import { AppContext } from './contexts/app_context';
// import Welcome from './pages/welcome/Welcome';
// import Home from './pages/home/Home';
// import Nav from './components/nav/Nav';
// import Burner from './pages/burner/Burner';
// import SafeHouse from './pages/safehouse/SafeHouse';
// import Headquarters from './pages/headquarters/Headquarters';
// import Ranks from './pages/ranks/Ranks';
// import Intelligence from './pages/intelligence/Intelligence';
// import Operations from './pages/operations/Operations';
// import Missions from './pages/missions/Missions';

// function App() {

//   const [user, setUser] = useState(getUser());
//   // const { showNav } = useContext( AppContext )

//   return (
//     <div className="App">
//       {/* { showNav && <Nav /> } */}
//     <Routes>
//       <Route path={"/"} element={ <Welcome /> } />
    
//       <Route path={"/home"} element={ <Home /> } /> {/* temp */}
//       <Route path={"/headquarters"} element={ <Headquarters /> } />
//       <Route path={"/ranks"} element={ <Ranks /> } />
//       <Route path={"/intelligence"} element={ <Intelligence /> } />
//       <Route path={"/operations"} element={ <Operations /> } />
//       <Route path={"/missions"} element={ <Missions /> } />
//       <Route path={"/burner"} element={ <Burner /> } />
//       <Route path={"/safehouse"} element={ <SafeHouse /> } />
      
//       <Route path={"/auth"} element={ <AuthPage setUser={setUser} /> } />
//       {/* <Route path={"/signup"} element={ <SignUp /> } /> */}
//       {/* <Route path={"/welcome"} element={ <Welcome /> } /> */}


//       {/* <Route path={"/test"} element={ <h1>test route works</h1>} /> */}
//       <Route path={"/*"} element={ <h1>You are off course Agent. Return to {'<HQ/>'}</h1>} />
//     </Routes>

//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';
// pages
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// components
import NavBar from './components/NavBar/NavBar';
// css
import './App.css';

function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;