import styled, {css} from "styled-components";
import Summary from "./Explanation_com/Summary";
import Note from "./Explanation_com/Note";
import AirCover from "./Explanation_com/AirCover";
import Detail from "./Explanation_com/Detail";
import Bed from "./Explanation_com/Bed";
import Facilities from "./Explanation_com/Facilities";
import Checkin from "./Explanation_com/Checkin";

const Explanation = () => {

	return (
		<div style={{display: "flex", flexDirection: "column", width: "60%", borderBottom: "1px"}}>
			<Summary />
			<Note />
			<AirCover />
			<Detail />
			<Bed />
			<Facilities />
			<Checkin />
		</div>
	);
};

export default Explanation;