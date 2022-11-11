import { useRef, useState, useEffect } from "react";
import styled, {css} from "styled-components";
import Filter from "./NavFilter";
import { NavRightBtn, NavLeftBtn } from "./NavScrollBtn";

const NavWrap = styled.div`
	position: sticky;//나중에 수정
	top: 80px;//
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	padding: 20px 80px 0 80px;
	height: 98px;
	/* background-color: white; */
	background-color: #dddddd;
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
const NavImgBtn = styled.button`
	cursor: pointer;
	margin-right: 32px;
	padding: 0;
	background-color: white;
	border-style: none;
	opacity: 0.7;
	border-bottom: 2px solid white;
`
const NavImgText = styled.div`
	box-sizing: border-box;
	height: 38px;
	padding-top: 8px;
	padding-bottom: 12px;
	&:hover {
		border-bottom: 2px solid #B0B0B0;
	}
`

const Nav = () => {

	const navRef = useRef();
	const [isNavRender, setIsNabRender] = useState(false);

	useEffect(() => {
		setIsNabRender(true);
	}, []);

	let tempImgList = [];
	for (let i = 0; i < 50; i++) {
		tempImgList[i] = <NavImgBtn>
			<div style={{width: "56px"}}>
				<img src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24" />
			</div>
			<NavImgText>
				캠핑장{i}
			</NavImgText>
		</NavImgBtn>
	};

	return (
		<NavWrap>
			<div style={{position: "relative", zIndex: "98"}}>
				<NavLeftBtn navWidth={isNavRender ? navRef.current.offsetWidth : 0} navRef={navRef}/>
			</div>
			<NavImgWrap ref={navRef}>
				{tempImgList}
			</NavImgWrap>
			<div style={{position: "relative"}}>
				<NavRightBtn navWidth={isNavRender ? navRef.current.offsetWidth : 0} navRef={navRef}/>
			</div>
			<Filter />
		</NavWrap>
	)
}

export default Nav;