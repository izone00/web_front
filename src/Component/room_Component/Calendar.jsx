import styled, {css} from "styled-components";

const CalCon = styled.div`
	
`;
const CalMon = styled.div`
	display: block;
	width: 100%;
	font-size: 16px;
	font-weight: 600;
	line-height: 20px;
	padding: 22px 0 48px 0;
`
const CalWeek = styled.div`
	
`
const Calday = styled.td`
	position: relative;
	background-color: green;
	width: 16%;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`
const Calday = () => {
	
}
const Calendar = () => {

	return (
		<div style={{textAlign: "center"}}>
			<CalMon>2022년 11월</CalMon>
			<table style={{fontSize: "16px", lineHeight: "20px", width: "100%"}}>
				<tr style={{margin: "0 1px", position: "relative"}}>
					<Calday>
						<div style={{position: "absolute"}}>
							1
						</div>
					</Calday>
				</tr>
			</table>
		</div>
	);
};

export default Calendar;