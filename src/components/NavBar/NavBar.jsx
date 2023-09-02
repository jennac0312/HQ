import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import { useContext } from 'react';
import { AppContext } from '../../contexts/app_context';

export default function NavBar() {
  function handleLogOut() {
    userService.logOut();

    setUser(null);
  }

  const { user, setUser } = useContext(AppContext)

  return (
    <nav>
      <Link to='/orders'>Order History</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/new'>New Order</Link>
      &nbsp;&nbsp; <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
      <Link to='' onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
