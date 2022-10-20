const Nav = () => {
	return (
		<nav id="nav_container">
			<div id="nav_box">
				<div id="theme_icon_container">
					<button class="theme_icon_box">
						<img class="theme_icon" src="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg" alt="" width="24" height="24" />
							<div class="theme_text">
								캠핑장
							</div>
					</button>
				</div>
				<div id="nav_right">
					<div class="theme_btn_container">
						<button class="theme_btn" id="theme_right_btn">
							<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" ariaHidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
						</button>
					</div>
				</div>
				<div id="nav_left">
					<div class="theme_btn_container">
						<button class="theme_btn" id="theme_left_btn">
							<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" ariaHidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
						</button>
					</div>
				</div>
				<div id="filter_container">
					<button id="filter_box">
						<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" ariaHidden="true" role="presentation" focusable="false" style="display: block; height: 14px; width: 14px; fill: currentcolor;"><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
						필터
					</button>
				</div>
			</div>
		</nav>
	)
}