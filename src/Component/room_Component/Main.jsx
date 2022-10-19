import styled, {css} from "styled-components";
import Explanation from "./Explanation";
import Pay from "./Pay";

const Main = () => {

	return (
		<div style={{padding: "0 80px"}}>
			<div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid #DDDDDD"}}>
				<Explanation />
				<div style={{flex: "2 2 10px"}}>
					<Pay />
				</div>
			</div>
		</div>
	)
};

export default Main;
