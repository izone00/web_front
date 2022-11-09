import {EarthSvg, MenuSvg, LoginSvg} from "../svg.js"
import Sign from "../SignComponent/Sign.jsx";
import React, { useState, useEffect, useRef } from "react"
import styled, {css} from "styled-components";
import { Link } from "react-router-dom"

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
const MenuListBtn = styled.button`
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

	const showSign = () => {
		props.sign(true);
		props.menu(false);
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
				<MenuListBtn onClick={showSign}>
					<span style={{fontWeight: "600"}}>회원 가입</span>
				</MenuListBtn>
				<MenuListBtn onClick={showSign}>
					로그인
				</MenuListBtn>
				<MenuListLine />
				<MenuListBtn>
					숙소 호스트 되기
				</MenuListBtn>
				<MenuListBtn>
					체험 호스팅 하기
				</MenuListBtn>
				<MenuListBtn>
					도움말
				</MenuListBtn>
		</MenuListCon>
	)
}
const Menu = () => {

	const [menuOpen, setMenuOpen] = useState(false);
	const [signOpen, setSignOpen] = useState(false);
	
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
					{menuOpen && <MenuList sign={setSignOpen} menu={setMenuOpen} menuBtnRef={menuBtnRef}/>}
				</div>
					{signOpen && <Sign setSignOpen={setSignOpen} />}
			</div>
		</nav>
	)
}

export default Menu