import Filter from "./Filter";
import { NavRightBtn, NavLeftBtn } from "./NavScrollBtn";

const TempNav = () => {
	
	return (
		<div>
			<Filter />
		</div>
	);
};


const Nav = () => {

	return (
		<nav id="nav_container">
			<div id="nav_box">
				<div id="theme_icon_container">
					<button className="theme_icon_box">
						<img className="theme_icon" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24" />
							<div className="theme_text">
								캠핑장
							</div>
					</button>
				</div>
				<NavLeftBtn />
				<NavRightBtn />
				<Filter />
			</div>
		</nav>
	)
}

export default Nav;