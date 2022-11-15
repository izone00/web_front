import styled, {css} from "styled-components";
import { useState } from "react";


const NavImgBtnWrap = styled.button`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 66px;
	margin-top: 12px;
	margin-right: 32px;
	padding: 4px 0 12px 0;
	background-color: white;
	border-style: none;
	opacity: 0.7;
	border-bottom: 2px solid white;
`
const NavImg = styled.img`
	filter: opacity(0.7) ;
	
	transition: 0.2s ease;
	${props =>
		props.hover &&
		css`
			filter: opacity(1);
		`}
`

const NavImgText = styled.span`
	line-height: 16px;
	font-weight: 600;
	color: #717171;

	transition: 0.2s ease;
	${props =>
		props.hover &&
		css`
			color: #000000;
		`}
	
	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 28px;
		width: 100%;
		height: 2px;
		background-color: ${props =>
												(props.click && "#000000")
												|| (props.hover && "#717171")};
	}
`
const NavImgBtn = ({thema, click, setClick}) => {
	
	const [navImgHover, setNavImgHover] = useState(false);

	return (
		<NavImgBtnWrap onMouseOver={() => setNavImgHover(true)} onMouseOut={() => setNavImgHover(false)} onClick={() => setClick(thema.name)}>
			<div style={{width: "56px"}}>
				<NavImg src={thema.imgSrc} alt="" width="24" height="24" hover={navImgHover}/>
			</div>
			<div style={{position: "relative"}}>
				<NavImgText hover={navImgHover} click={click === thema.name}>{thema.name}</NavImgText>
			</div>
		</NavImgBtnWrap>
	);
};

export default NavImgBtn;