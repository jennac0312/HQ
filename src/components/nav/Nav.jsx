import React, { useContext, useState } from "react";
import "./nav.css";
import { AppContext } from "../../contexts/app_context";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

const Nav = () => {
	const { navigate, setShowNav, currentPage, setCurrentPage, pageCategories, setUser } = useContext(AppContext);
	const [toggleList, setToggleList] = useState(0);

	// click on anything nav disappear

	const all = document.querySelectorAll("nav p");
	const listItems = document.querySelectorAll(".list p");
	console.log("NAV ALL Ps", all);

	all.forEach(( element ) => {
		element.addEventListener( 'click', () => {
			console.log('clicked')
			console.log( 'clicked class list',element.classList )
			if( element.classList.value.includes("showNav") ) return
			setShowNav(false)
		})
	})
	listItems.forEach(( element ) => {
		element.addEventListener( 'click', () => {
			setShowNav(false)
		})
	})

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
			</div>
			<p className="hover" onClick={() => navigate('/headquarters')}>{"< hq />"}</p>
			<p className="hover" onClick={() => navigate('/ranks')}>ranks</p>

			<p className="hover showNav" onClick={() => handleClick( 'intelligence', 1 )}>
				{/* <span className="arrow">{toggleList === 1 ? "⬇️" : "➡️"}</span> */}
				<span>intelligence</span>
			</p>
			{/* <div className="list">
				{toggleList === 1 &&
					pageCategories.map((category) => {
						return <p className="hover">{category}</p>;
					})}
			</div> */}

			<p className="hover showNav" onClick={() => handleClick( 'operations', 2 )}>
				{/* <span className="arrow">{toggleList === 2 ? "⬇️" : "➡️"}</span> */}
				<span>operations</span>
			</p>
			{/* <div className="list">
				{toggleList === 2 &&
					pageCategories.map((category) => {
						return <p className="hover">{category}</p>;
					})}
			</div> */}

			<p className="hover showNav" onClick={() => handleClick( 'missions',3 )}>
				{/* <span className="arrow">{toggleList === 3 ? "⬇️" : "➡️"}</span> */}
				<span>missions</span>
			</p>
			{/* <div className="list">
				{toggleList === 3 &&
					pageCategories.map((category) => {
						return <p className="hover">{category}</p>;
					})}
			</div> */}
			<div className="logOut">
				<Link to='/authorize' onClick={handleLogOut}>
					Log Out
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
