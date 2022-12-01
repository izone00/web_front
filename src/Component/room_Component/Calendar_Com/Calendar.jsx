import styled, {css} from "styled-components";
import { useState } from 'react';
import CalDayTable from "./CalDayTable";
import { CalClearBtn } from "../../../features/booking/CalClearBtn";
import { monList } from "./monthList";

const CalCon = styled.div`
	
`;
const CalMon = styled.div`
	/* display: block; */
	/* white-space: normal; */
	padding: 22px 0 48px 0;
	/* width: 100%; */
	font-size: 16px;
	font-weight: 600;
	line-height: 20px;
`
const CalSlider = styled.div`
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
`
const CalWrap = styled.div`
	display: inline-block;
	box-sizing: border-box;
	width: 50%;
	padding: 0 13px;
	/* transition: 0.4s ease; */

	/* ${props =>
		props.trans &&
		css`
			@keyframes trans {
				from {
					transform: translate(0, 0);
				}	

				to {
					transform: translate("-${props.trans}%", 0);
				}
			}
			animation: shadowIn 0.4s ease forwards 		
		`} */
`
const	RightBtn = styled.button`
	position: absolute;
	right: 0;
	top: 0;
	margin-top: 22px;
	margin-right: 13px;
	cursor: pointer;
`
const	LeftBtn = styled.button`
	position: absolute;
	left: 0;
	top: 0;
	margin-top: 22px;
	margin-left: 13px;
	cursor: pointer;
`

const Calendar = () => {
	const [trans, setTrans] = useState(0);
	const [viewCal, setViewCal] = useState([{...monList[0]}, {...monList[1]}]);

	const onClickRight = () => {
		setViewCal([{...monList[0]}, {...monList[1]}, {...monList[2]}]);
		setTrans(100);
	}
	const onClickLeft = () => setTrans((trans >= 100) ? trans - 100 : 0);

	const CalTableList = viewCal.map((table) => (
		<CalWrap trans={trans}>
			<CalMon>
				{table.year}년 {table.month}월
			</CalMon>
			<CalDayTable date={table} />
		</CalWrap>
	));

	return (
		<div style={{position: "relative", width: "100%"}}>
			<div style={{textAlign: "center", width: "100%"}}>
				<CalSlider>
					{CalTableList}
				</CalSlider>
			</div>
			<LeftBtn onClick={onClickLeft}>
				이전
			</LeftBtn>
			<RightBtn onClick={onClickRight}>
				다음
			</RightBtn>
			<CalClearBtn />
		</div>
	);
};

export default Calendar;