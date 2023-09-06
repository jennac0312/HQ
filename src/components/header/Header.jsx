import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/app_context";
import "./header.css";
import Search from "../search/Search";

const Header = ({ page }) => {

	const { user, currentPage, showSearch, setShowSearch, showNav, setShowNav, navigate, setShowEdit, showEdit } = useContext(AppContext);
	const [ searchBurner, setSearchBurner ] = useState("")

	const handleSearchClick = () => {
		if( showNav ){
			setShowNav(false) // hide nav if open
		} else {
			setShowSearch(true)
			// handle search
			// navigate to search page... 
				// do i want this to be an enitre page?
		}
	}

	const handleBurnerClick = () => {
		if( showNav ){
			setShowNav(false) // hide nav if open
		} else {
			// delete all messages. throw burner away
		}
	}

	// basic header
	const main = () => {
		return (
			<header>
				{ showSearch && <Search /> }
				<p className="hover icon-30" onClick={() => setShowNav(!showNav)}>
					🗄️
				</p>
				<h2 className="title" onClick={() => setShowNav(false)}>{currentPage.toUpperCase()}</h2>
				<p className="hover icon-30" onClick={ handleSearchClick }>🔍</p>
			</header>
		);
	}

	// for burner page
	const burner = () => {
		const handleChange = (e) => {
			setSearchBurner( e.target.value )
			console.log('burner search:', searchBurner)
			// filter dms 
		}
		return (
			<header>
				<p className="hover icon-30" onClick={() => setShowNav(!showNav)}>
					🗄️
				</p>
				<input type="text" placeholder="search burner" autoFocus onClick={() => setShowNav(false)} onChange={(e) => handleChange(e)} value={searchBurner || ""}/>
				<p className="hover icon-30" onClick={ handleBurnerClick }>🔥</p>
			</header>
		);
	}

	// for safehouse page settings
	const safehouse = () => {
		return (
			<header>
				<p className="hover icon-30" onClick={() => setShowNav(!showNav)}>
					🗄️
				</p>
				<h3 className="titleSafe">you are safe here. Feel free to jot down some notes. pure confidentiality agent {user.name}.</h3>
				{/* edit user profile */}
				<p className="hover icon-30" onClick={() => navigate(`/safehouse/edit`)}>✏️</p>
				{/* <p className="hover icon-30" onClick={ navigate(`/safehouse/edit/${user._id}`) }>✏️</p> */}
			</header>
		)
	}

	// for edit page
	const edit = () => {
		return (
			<header>
				<p className="hover icon-30 back" onClick={() => navigate(-1)}>
					🔙
				</p>
				<h3 className="titleSafe">editing agent {user.name.toUpperCase()}</h3>
				{/* edit user profile */}
				<p className="hover icon-30" onClick={() => navigate('/safehouse/edit') }>☑️✅✔️</p>
			</header>
		)
	}

	 switch (page) {
		case "burner":
			return burner()
		case "safehouse":
			return safehouse()
		case "edit":
			return edit()
		default:
			return main()
	}

	// if( page === "burner" ) return burner()
	// if( page === "safehouse" ) return safehouse()
	// return main()

	// return page === "burner" ? burner() : main()
};

export default Header;
