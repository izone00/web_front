import {EarthSvg, MenuSvg, LoginSvg} from "./svg.js"

const menu = () => {

	return (
		<nav id="menu_box">
			<div id="menu_bar">
				<a class="menu" id="host-btn" href="./host_airbnb.html">호스트 되기</a>
				<button class="menu" id="lang">
					<EarthSvg />
				</button>
				<button class="menu" id="login_menu">
					<MenuSvg />
					<LoginSvg />
				</button>
			</div>
		</nav>
	)
}

export default menu