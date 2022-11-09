import styled, {css} from "styled-components";
import { book } from "../../../book";

const CalWeek = styled.div`
	
`
const CaldayWrap = styled.td`
	position: relative;
	background-color: green;
	padding: 0;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`
const CalDay = styled.div`
	position: absolute;
	width: 100%;
	top: 50%;
	transform: translate(0,-50%);
`

const CalDayTable = (props) => {
	const CalDayMat = props.date.dayList.map((row) => {
		console.log(props.date.year);
		let CalDayRow = row.map((day) => (
			<CaldayWrap>
				<CalDay>
					{day}
				</CalDay>
			</CaldayWrap>
		));
	
		return (
			<tr style={{ margin: "0 1px", position: "relative" }}>
				{CalDayRow}
			</tr>
		);
	});

	return (
		<table style={{fontSize: "14px", fontWeight: "600", lineHeight: "20px", width: "100%"}}>
			<tbody>
				{CalDayMat}
			</tbody>
		</table>
	)
}

export default CalDayTable;

