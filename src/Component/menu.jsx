import {EarthSvg, MenuSvg, LoginSvg} from "./svg.js"
import { useState } from "react"

const MenuModal = () => {

	return (
		<div>
			hello
		</div>
	)
}
const Menu = () => {

	const [menuOpen, setMenuOpen] = useState(false);

	const showMenu = () => {
		setMenuOpen(true);
	};

	return (
		<nav id="menu_box">
			<div id="menu_bar">
				<a class="menu" id="host-btn" href="./host_airbnb.html">호스트 되기</a>
				<button class="menu" id="lang">
					<EarthSvg />
				</button>
				<div>
					<button class="menu" id="login_menu" onClick={showMenu}>
						<MenuSvg />
						<LoginSvg />
					</button>
					{menuOpen && <MenuModal />}
				</div>
			</div>
		</nav>
	)
}

export default Menu