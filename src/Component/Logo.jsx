import { LogoSvg } from "./svg";

const Logo = () => {
	return (
		<div style={{flex: "1 1", height: "100%", position: "relative"}}>
			<a href="./" style={{height: "100%", width: "102px", position: "absolute"}}>
				<LogoSvg />
			</a>
		</div>
	)
}

export default Logo;