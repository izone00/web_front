import styled, {css} from "styled-components";
import {EarthSvg, MenuSvg, LoginSvg} from "../svg.js"
import Sign from "../SignComponent/Sign.jsx";
import React, { useState, useRef } from "react"
import { MenuList } from "./MenuList.jsx";

const MenuWrap = styled.div`
	display: flex;
	justify-content: end;
	/* align-items: center; */
	flex: 1 1 ;
	height: 42px;
`
const MenuHostBtn = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 100px;
	height: 100%;
	font-size: 14px;
	font-weight: 600;
	color: #222222;
	text-decoration: none;
	
	&:hover {
		background-color: #F7F7F7;
		border-radius: 42px;
	}
`
const MenuEarthBtn = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	border-style: none;
	margin-right: 6px;
	background-color: inherit;
	
	&:hover {
		background-color: #F7F7F7;
		border-radius: 42px;
	}
`
const MenuLoginBtn = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 77px;
	border: 1px solid lightgray;
	border-radius: 42px;
	padding: 5px 5px 5px 12px;
	color: #717171;
	background-color: inherit;
	box-shadow: 0 0 5px #F7F7F7;

	&:hover {
		transition: ease 0.3s;
		box-shadow: 0 4px 4px #DDDDDD;
	}

	${props =>
		props.click &&
		css`
			box-shadow: 0 4px 4px #DDDDDD;
		`}
`
const Menu = () => {

	const [menuOpen, setMenuOpen] = useState(false);
	const [signOpen, setSignOpen] = useState(false);
	
	const showMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const menuBtnRef = useRef();

	return (
		<MenuWrap>
			<MenuHostBtn>호스트 되기</MenuHostBtn>
			<MenuEarthBtn>
				<EarthSvg />
			</MenuEarthBtn>
			<div style={{ position: "relative" }}>
				<MenuLoginBtn ref={menuBtnRef} click={menuOpen} onClick={showMenu}>
					<MenuSvg />
					<LoginSvg />
				</MenuLoginBtn>
				{menuOpen && <MenuList sign={setSignOpen} menu={setMenuOpen} menuBtnRef={menuBtnRef} />}
			</div>
			{signOpen && <Sign setSignOpen={setSignOpen} />}
		</MenuWrap>
	)
}

export default Menu