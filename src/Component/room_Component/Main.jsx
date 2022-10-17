import styled, {css} from "styled-components";
import Explanation from "./Explanation";

const Main = () => {

	return (
		<div style={{display: "flex", flexDirection: "row", padding: "0 80px", borderBottom: "1px solid #DDDDDD"}}>
			<Explanation />
			<div style={{flex: "2 2 10px"}}>

			</div>
		</div>
	)
};

export default Main;
