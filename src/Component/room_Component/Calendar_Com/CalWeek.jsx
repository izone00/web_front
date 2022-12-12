import styled, {css} from "styled-components";
import { week } from "./monthList";

const CalWeekWrap = styled.div`
	position: absolute;
	display: flex;
	flex-direction: row;
	top: 62px;
	width: 100%;
`

const CalWeekListWrap = styled.div`
	/* position: absolute; */
	box-sizing: border-box;
	top: 62px;
	display: flex;
	flex-direction: row;
	width: 50%;
	padding: 0 13px;
`
const CalWeekElem = styled.div`
	text-align: center;
	width: 100%;
	line-height: 16px;
	font-size: 12px;
	font-weight: 600;
	color: #B0B0B0;
`

export const CalWeek = ()	=> {

	const CalWeekList = week.map((dayOfWeek, idx) =>
		<CalWeekElem key={idx}>
			{dayOfWeek}
		</CalWeekElem>
	)

	return (
		<CalWeekWrap>
			<CalWeekListWrap>
				{CalWeekList}
			</CalWeekListWrap>
			<CalWeekListWrap>
				{CalWeekList}
			</CalWeekListWrap>
		</CalWeekWrap>
	)
}