import styled, {css} from "styled-components";
import { LeftSvg, RightSvg } from "./NavSvg";

const RightBtnWrap = styled.div`
	position: absolute;
	right: 184px;
	height: inherit;
	box-shadow: -20px 0 15px white;
`
const LeftBtnWrap = styled.div`
	position: absolute;
	left: 80px;
	height: inherit;
	box-shadow: 20px 0 15px white;
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
const NavRightBtn = () => {

	return (
		<RightBtnWrap>
			<NavBtnbox>
				<NavBtn>
					<RightSvg />
				</NavBtn>
			</NavBtnbox>
		</RightBtnWrap>
		// <div id="nav_right">
		// 	<div className="theme_btn_container">
		// 		<button className="theme_btn" id="theme_right_btn">

		// 		</button>
		// 	</div>
		// </div>
	);
};
const NavLeftBtn = () => {

	return (
		<LeftBtnWrap>
			<NavBtnbox>
				<NavBtn>
					<LeftSvg />
				</NavBtn>
			</NavBtnbox>
		</LeftBtnWrap>
	);
};
export { NavRightBtn, NavLeftBtn };