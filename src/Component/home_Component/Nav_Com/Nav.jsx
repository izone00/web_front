import styled, {css} from "styled-components";
import Filter from "./NavFilter";
import { NavRightBtn, NavLeftBtn } from "./NavScrollBtn";

const NavWrap = styled.div`
	position: fixed;
	top: 80px;
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
const TempNav = () => {
	
	return (
		<div>
			<Filter />
		</div>
	);
};


const Nav = () => {

	return (
		<NavWrap>
			{/* <div id="nav_box"> */}
				{/* <div id="theme_icon_container">
					<button className="theme_icon_box">
						<img className="theme_icon" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24" />
							<div className="theme_text">
								캠핑장
							</div>
					</button>
				</div> */}
				<div style={{position: "relative", width: "100%", height: "100%"}}>
					<NavLeftBtn />
					<NavRightBtn />
				</div>
				<Filter />
			{/* </div> */}
		</NavWrap>
	)
}

export default Nav;