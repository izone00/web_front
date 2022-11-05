import {EarthSvg, MenuSvg, LoginSvg} from "./svg.js"
import React, { useState, useEffect, useRef } from "react"
import styled, {css} from "styled-components";
import { Link } from "react-router-dom"
import Sign from "./Sign.jsx";

const MenuListCon = styled.div`
	position: absolute;
	top : 50%;
	right: 0;
	z-index: 99;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 240px;
	margin-top: 32px;
	border-radius: 15px;
	padding: 8px 0;
	background-color: white;
	box-shadow: 0 0 10px #DDDDDD;
	font-size: 14px;
`
const MenuListOpt = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	text-align: left;
	height: 42px;
	width: 100%;
	padding-left: 20px;
	border-style: none;
	background-color: white;
	&:hover {
		background-color: #F7F7F7;
	}
`
const MenuListLine = styled.div`
	height: 1px;
	margin: 8px 0;
	background-color: #B0B0B0;
`
const MenuList = (props) => {

	const showSignUp = () => {
		props.signUp(true);
	};

	const showLogin = () => {
		props.login(true);
	};
	
	const menuListRef = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (menuListRef.current && !menuListRef.current.contains(event.target) && !props.menuBtnRef.current.contains(event.target))
				props.menu(false);
		};

		document.addEventListener('mousedown', handler);

		return () => {
			document.removeEventListener('mousedown', handler);
		};
	});

	return (
		<MenuListCon ref={menuListRef}>
				<MenuListOpt onClick={showSignUp}>
					<span style={{fontWeight: "600"}}>회원 가입</span>
				</MenuListOpt>
				<MenuListOpt onClick={showLogin}>
					로그인
				</MenuListOpt>
				<MenuListLine />
				<MenuListOpt>
					숙소 호스트 되기
				</MenuListOpt>
				<MenuListOpt>
					체험 호스팅 하기
				</MenuListOpt>
				<MenuListOpt>
					도움말
				</MenuListOpt>
		</MenuListCon>
	)
}
const Menu = () => {

	const [menuOpen, setMenuOpen] = useState(false);
	const [signUpOpen, setSignUpOpen] = useState(false);
	const [loginOpen, setLoginOpen] = useState(false);
	
	const showMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const menuBtnRef = useRef();
	return (
		<nav id="menu_box">
			<div id="menu_bar">
				<a className="menu" id="host-btn" href="./host_airbnb.html">호스트 되기</a>
				<button className="menu" id="lang">
					<EarthSvg />
				</button>
				<div style={{position: "relative"}}>
					<button ref={menuBtnRef} className="menu" id="login_menu" onClick={showMenu}>
						<MenuSvg />
						<LoginSvg />
					</button>
					{menuOpen && <MenuList signUp={setSignUpOpen} login={setLoginOpen} menu={setMenuOpen} menuBtnRef={menuBtnRef}/>}
				</div>
				<Sign />
					{signUpOpen && <div>signup</div>}
					{loginOpen && <div>login</div>}
			</div>
		</nav>
	)
}

export default Menu