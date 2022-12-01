import Explanation from "./Explanation";
import { Pay } from "./Pay_com/Pay";

const Main = () => {

	return (
		<div style={{padding: "0 80px"}}>
			<div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid #DDDDDD"}}>
				<Explanation />
				<div style={{width: "40%"}}>
					<Pay />
				</div>
			</div>
		</div>
	)
};

export default Main;
