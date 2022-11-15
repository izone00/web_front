import { useRef, useState, useEffect } from "react";
import styled, {css} from "styled-components";
import Filter from "./NavFilter";
import { NavRightBtn, NavLeftBtn } from "./NavScrollBtn";
import NavImgBtn from "./NavImgBtn";
import { themaList } from "../../thema_list";

const NavWrap = styled.div`
	position: sticky;//나중에 수정
	top: 60px;//
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	padding: 20px 80px 0 80px;
	height: 98px;
	background-color: white;
	z-index: 5;
	
	${props =>
		props.scroll &&
		css`
			box-shadow: 0 0 10px #DDDDDD;
		`}
`
const NavImgWrap = styled.div`
	position: relative;
	display: flex;
	/* width: 100%; */
	height: 100%;
	white-space: nowrap;
	overflow-x: hidden;
	scroll-behavior: smooth;
`

const Nav = () => {

	const navRef = useRef();
	const [isNavRender, setIsNabRender] = useState(false);
	const [isScroll, setIsScroll] = useState(false);
	const [navClick, setNavClick] = useState("최고의 전망");

	useEffect(() => {
		const navWrapScroll = (e) => {
			if (document.documentElement.scrollTop > 0)
				setIsScroll(true);
			else
				setIsScroll(false);
		}
		setIsNabRender(true);
		window.addEventListener('scroll', navWrapScroll);

		return () => {
			window.removeEventListener('scroll', navWrapScroll)
		}
	}, []);

	let tempImgList = [];
	for (let i = 0; i < themaList.length; i++) {
		tempImgList[i] = <NavImgBtn thema={themaList[i]} click={navClick} setClick={setNavClick}/>
	};

	return (
		<NavWrap scroll={isScroll}>
			<div style={{position: "relative", zIndex: "10"}}>
				<NavLeftBtn navWidth={isNavRender ? navRef.current.offsetWidth : 0} navRef={navRef}/>
			</div>
			<NavImgWrap ref={navRef}>
				{tempImgList}
			</NavImgWrap>
			<div style={{position: "relative", zIndex: "10"}}>
				<NavRightBtn navWidth={isNavRender ? navRef.current.offsetWidth : 0} navRef={navRef}/>
			</div>
			<Filter />
		</NavWrap>
	)
}

export default Nav;