import Logo from "./Logo.jsx"
import Search from "./Search"
import Menu from "./Menu.jsx"
import React, {useState} from "react"
// import test from "../event/test"

const Header = () => {
	const [className, setClass] = useState("header-container");
	// let className = "header-container";
	// const test = () => {
	// document.getElementById("ss").className += " searchMore";
	// }

	return (
		// <div id="header_shadow_box">
		<header className={className}>
			{/* <Logo />
			<Search />
			<Menu /> */}
		</header>
		// </div>
	);
};

export default Header;