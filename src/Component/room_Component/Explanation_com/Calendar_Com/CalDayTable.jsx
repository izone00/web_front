import styled, {css} from "styled-components";
import { CalBookBtn } from "../../../../features/booking/CalBookBtn.";

const CalWeek = styled.div`
	
`
const CaldayWrap = styled.td`
	position: relative;
	box-sizing: border-box;
	background-color: inherit;
	border: none;
	padding: 0;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}

	/* ${props =>
		props.hover &&
		css`
			background-color: #F7F7F7;
			border-right-color: #F7F7F7;
			border-left-color: #F7F7F7;
		`} */
`


const CalDayTable = ({ date }) => {
	const CalDayList = date.dayTable.map((row) => {

		return (
			<tr style={{ margin: "0 1px", position: "relative" }}>{
				row.map((day) => {
					return (
						<CaldayWrap>
							<CalBookBtn day={day} />
						</CaldayWrap>
					)
				})}
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

