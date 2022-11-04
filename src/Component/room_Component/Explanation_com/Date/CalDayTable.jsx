import styled, {css} from "styled-components";
import monList from "./monthList";

const CalWeek = styled.div`
	
`
const Calday = styled.td`
	position: relative;
	background-color: green;
	padding: 0;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`

const CalDayTable = (props) => {
	const CalDayMat = props.dayList.map((row) => {
		let CalDayRow = row.map((day) => (
			<Calday>
				<div style={{ position: "absolute", width: "100%", top: "50%", transform: "translate(0,-50%)" }}>
					{day}
				</div>
			</Calday>
		));
	
		return (
			<tr style={{ margin: "0 1px", position: "relative" }}>
				{CalDayRow}
			</tr>
		);
	});

	return (
		<table style={{fontSize: "14px", fontWeight: "600", lineHeight: "20px", width: "100%"}}>
			{CalDayMat}
		</table>
	)
}

export default CalDayTable;

