import { CalBookBtn } from "../../../features/booking/CalBookBtn";

const CalDayTable = ({ date }) => {

	const CalDayList = date.dayTable.map((row) => {

		return (
			<tr key={row[0].date || "empty"} style={{ margin: "0 1px", position: "relative" }}>
				{row.map((day, idx) => <CalBookBtn key={idx} day={day} />)}
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

