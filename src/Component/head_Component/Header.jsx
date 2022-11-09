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
	${props =>
		props.site === "main" &&
		css`
			position: fixed;
		`}
`

const Header = () => {

	return (
		<HeaderBar>
			<Logo />
			<Search />
			<Menu />
		</HeaderBar>
	);
};

export default Header;