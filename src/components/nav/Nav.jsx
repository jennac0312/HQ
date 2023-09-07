import React, { useContext, useState } from "react";
import "./nav.css";
import { AppContext } from "../../contexts/app_context";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

const Nav = () => {
	const { navigate, setShowNav, currentPage, setCurrentPage, pageCategories, setUser, user } = useContext(AppContext);
	const [toggleList, setToggleList] = useState(0);

	const handleToggle = (toggleNumber) => {
		if (toggleNumber === toggleList) {
			//  if clicked when showing, hide
			setToggleList(0);
		} else {
			setToggleList(toggleNumber);
		}
	};

	// to open intel / ops/ missions channel
	const handleClick = ( channel, toggleNumber ) => {
		// navigate to channel
		navigate( `/${channel}` )
		// open drop down for further filter
		handleToggle( toggleNumber )
	}

	function handleLogOut() {
		userService.logOut();
	
		setUser(null);
	}

	return (
		<nav className="nav" onClick={() => setShowNav(false)}>
			{/* <h1>NAV BAR</h1> */}
			<div className="top">
				<p className="hover" onClick={() => navigate("/burner")}>
					📱 burner
				</p>
				<p className="hover" onClick={() => navigate("/safehouse")}>
					🏡 safehouse
				</p>
				{/* <Link to="/safehouse">
					<p className="hover" >🏡 safehouse</p>
				</Link> */}
			</div>
			<p className="hover" onClick={() => navigate('/ranks')}>ranks</p>
			<p className="hover" onClick={() => navigate('/headquarters')}>{"< hq />"}</p>

			<p className="hover showNav" onClick={() => handleClick( 'intelligence', 1 )}>
				{/* <span className="arrow">{toggleList === 1 ? "⬇️" : "➡️"}</span> */}
				<span>intelligence</span>
			</p>

			<p className="hover showNav" onClick={() => handleClick( 'operations', 2 )}>
				{/* <span className="arrow">{toggleList === 2 ? "⬇️" : "➡️"}</span> */}
				<span>operations</span>
			</p>

			<p className="hover showNav" onClick={() => handleClick( 'missions',3 )}>
				{/* <span className="arrow">{toggleList === 3 ? "⬇️" : "➡️"}</span> */}
				<span>missions</span>
			</p>
			<div className="logOut">
				<span className="name">User: {user.name.toUpperCase()}</span>
				<Link to='/authorize' onClick={handleLogOut} className="auth">
					Log Out
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
