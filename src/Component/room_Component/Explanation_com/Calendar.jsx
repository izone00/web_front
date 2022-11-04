import styled, {css} from "styled-components";
import CalDayTable from "./Date/CalDayTable";
import monList from "./Date/monthList";
import { useState } from 'react';

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
let now = new Date();
const week = ["일", "월", "화", "수" , "목", "금", "토"];
let date = {
	year : now.getFullYear(),
	month : now.getMonth() + 1,
	day : now.getDate(),
	week : week[now.getDay()],
}

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
	const onClickRight = () => setTrans(trans + 100);
	const onClickLeft = () => {
		if (trans >= 100)
			setTrans(trans - 100);
	};
	const CalTableList = monList.map((table) => (
		<div style={{ width: "50%", padding: "0 13px", display: "inline-block", boxSizing: "border-box", transform: `translate(-${trans}%, 0)` }}>
			<CalMon>
				{table.year}년 {table.month}월
			</CalMon>
			<CalDayTable dayList={table.dayList} />
		</div>
	));

	return (
		<div style={{position: "relative", width: "100%"}}>
			<div style={{textAlign: "center", width: "100%"}}>
				<CalSlider trans = {trans}>
					{CalTableList}
				</CalSlider>
			</div>
			<LeftBtn onClick={onClickLeft}>
				이전
			</LeftBtn>
			<RightBtn onClick={onClickRight}>
				다음
			</RightBtn>
		</div>
	);
};

export default Calendar;