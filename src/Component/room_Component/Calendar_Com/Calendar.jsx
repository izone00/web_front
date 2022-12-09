import styled, {css} from "styled-components";
import { useState } from 'react';
import { CalClearBtn } from "../../../features/booking/CalClearBtn";
import { CalWeek } from "./CalWeek";
import { RightSvg, LeftSvg } from "../../svg";
import CalDayTable from "./CalDayTable";
import { monList } from "./monthList";

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
	@keyframes toLeft {
		from {transform: translate(0, 0)}
		to {transform: translate(-100%, 0);}
	}
	@keyframes toRight {
		from {transform: translate(-100%, 0)}
		to {transform: translate(0, 0);}
	}
	${props => 
		props.trans &&
		(props.trans === "toLeft" ?
		css`
			animation: toLeft 1s ease forwards;
		` :
		css`
			animation: toRight 1s ease forwards;
		`)}

` 
const	RightBtn = styled.button`
	cursor: pointer;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	right: 0;
	top: 0;
	width: 32px;
	height: 32px;
	margin-top: 16px;
	margin-right: 13px;
	border-radius: 50%;
	border-style: none;
	padding: 0;
	background-color: inherit;
	&:hover {
		background-color: #F7F7F7;
	}
	${props =>
		props.unavailble &&
		css`
			pointer-events: none;
		`}
`
const	LeftBtn = styled.button`
	cursor: pointer;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	left: 0;
	top: 0;
	width: 32px;
	height: 32px;
	margin-top: 16px;
	margin-left: 13px;
	border-radius: 50%;
	border-style: none;
	padding: 0;
	background-color: inherit;
	${props =>
		props.unavailble &&
		css`
			pointer-events: none;
		`}
`

const Calendar = () => {
	const [trans, setTrans] = useState("");
	const [viewCal, setViewCal] = useState([{...monList[0]}, {...monList[1]}, {...monList[2]}]);
	const [viewIdx, setViewIdx] = useState(0);
	
	const onClickRight = () => {
		setViewCal([{...monList[viewIdx]}, {...monList[viewIdx+1]}, {...monList[viewIdx+2]}]);
		setViewIdx(viewIdx + 1);
		setTrans("toLeft");
	};

	const onClickLeft = () => {
		setViewCal([{...monList[viewIdx-1]}, {...monList[viewIdx]}, {...monList[viewIdx+1]}]);
		setViewIdx(viewIdx - 1);
		setTrans("toRight")
	};

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
				<CalSlider key={String(viewIdx) + trans}>
						{CalTableList}
				</CalSlider>
			</div>
			<CalWeek />
			<LeftBtn unavailble={viewIdx === 0} onClick={() => onClickLeft()}>
				<LeftSvg />
			</LeftBtn>
			<RightBtn unavailble={viewIdx === 10} onClick={() => onClickRight()}>
				<RightSvg />
			</RightBtn>
			<CalClearBtn />
		</div>
	);
};

export default Calendar;