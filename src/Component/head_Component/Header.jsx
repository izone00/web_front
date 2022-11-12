import Logo from "./Logo"
import Search from "./Search"
import Menu from "./Menu"
import React, {useState} from "react"
import styled, {css} from "styled-components"
// import test from "../event/test"

const HeaderBar = styled.header`
	box-sizing: border-box;
	display: flex;
	inset: 0;
	height: 80px;
	align-items: center;
	border-bottom: 1px solid #EBEBEB;
	background-color: white;
	padding: 0 80px;
	z-index: 4;
	${props =>
	props.site === "home" &&
	css`
		position: sticky;
	`}
`

const Header = (props) => {


	return (
		<HeaderBar site={props.site}>
			<Logo />
			<Search />
			<Menu />
		</HeaderBar>
	);
};

export default Header;