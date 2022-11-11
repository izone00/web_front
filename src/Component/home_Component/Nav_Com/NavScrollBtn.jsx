import styled, {css} from "styled-components";
import { LeftSvg, RightSvg } from "./NavSvg";

const RightBtnWrap = styled.div`
	position: absolute;
	right: 0;
	height: inherit;
	box-shadow: -20px 0 15px white;
	transform: translate(0,-50%);
`
const LeftBtnWrap = styled.div`
	position: absolute;
	left: 0;
	height: inherit;
	box-shadow: 20px 0 15px white;
	transform: translate(0,-50%);
`
const NavBtnbox = styled.div`
	height: inherit;
	display: flex;
	align-items: center;
	width: 100%;
	background-color: white;
`
const NavBtn = styled.button`
	cursor: pointer;
	width: 28px;
	height: 28px;
	background-color: white;
	border-radius: 50%;
	border: 1px solid #B0B0B0;
`
const NavRightBtn = (props) => {

	const scrollRight = () => {
		props.navRef.current.scrollLeft += props.navWidth/2;
	}

	return (
		<RightBtnWrap>
			<NavBtnbox>
				<NavBtn onClick={scrollRight}>
					<RightSvg />
				</NavBtn>
			</NavBtnbox>
		</RightBtnWrap>
	);
};
const NavLeftBtn = (props) => {

	const scrollLeft = () => {
		props.navRef.current.scrollLeft -= props.navWidth/2;
		props.navRef.current.scrollLeft += props.navWidth/2;
		props.navRef.current.scrollLeft -= props.navWidth/2;
	}

	return (
		<LeftBtnWrap>
			<NavBtnbox>
				<NavBtn onClick={scrollLeft}>
					<LeftSvg />
				</NavBtn>
			</NavBtnbox>
		</LeftBtnWrap>
	);
};
export { NavRightBtn, NavLeftBtn };