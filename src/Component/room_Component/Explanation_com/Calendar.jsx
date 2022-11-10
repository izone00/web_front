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
const DelBtn = styled.button`
	position: absolute;
	right: 0;
	bottom: 0;
`
const Calendar = () => {
	const [trans, setTrans] = useState(0);
	const [checkinDay, setCheckinDay] = useState(false);
	const [checkoutDay, setCheckoutDay] = useState(false);
	const [maxDate, setMaxdate] = useState(false);
	const [hoverDate, setHoverDate] = useState(false);

	const onClickRight = () => setTrans(trans + 100);

	const onClickLeft = () => {
		if (trans >= 100)
			setTrans(trans - 100);
	};
	const initClick = () => {
		setCheckinDay(false);
		setCheckoutDay(false);
		setMaxdate(false);
		setHoverDate(false);
	};

	const CalTableList = monList.map((table) => (
		<div style={{ width: "50%", padding: "0 13px", display: "inline-block", boxSizing: "border-box", transform: `translate(-${trans}%, 0)`, transition: "0.2s ease" }}>
			<CalMon>
				{table.year}년 {table.month}월
			</CalMon>
			<CalDayTable date={table} checkinDay={checkinDay} setCheckinDay={setCheckinDay} maxDate={maxDate} setMaxdate={setMaxdate} hoverDate={hoverDate} setHoverDate={setHoverDate} checkoutDay={checkoutDay} setCheckoutDay={setCheckoutDay}/>
		</div>
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
			<DelBtn onClick={initClick}>
				날짜 지우기
			</DelBtn>
		</div>
	);
};

export default Calendar;