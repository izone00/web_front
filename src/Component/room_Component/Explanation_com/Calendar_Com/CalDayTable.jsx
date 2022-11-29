import styled, {css} from "styled-components";
import { CalBookBtn } from "../../../../features/booking/CalBookBtn";

const CalWeek = styled.div`
	
`

const CalDayTable = ({ date }) => {

	const CalDayList = date.dayTable.map((row) => {

		return (
			<tr style={{ margin: "0 1px", position: "relative" }}>
				{row.map((day) => <CalBookBtn day={day} />)}
			</tr>
		);
	});

	return (
		<table style={{borderSpacing: "0", width: "100%", fontSize: "14px", fontWeight: "600", lineHeight: "20px", }}>
			<tbody>
				{CalDayList}
			</tbody>
		</table>
	)
}

export default CalDayTable;

