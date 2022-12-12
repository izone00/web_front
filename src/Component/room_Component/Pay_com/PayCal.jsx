import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOpenCal } from "../../../features/booking/bookingSlice";
import { PayDate } from "./PayDate";
import Calendar from "../Calendar_Com/Calendar";
import { calNight } from "../Calendar_Com/monthList";

const PayCalWrap = styled.div`
	position: absolute;
	box-sizing: border-box;
	top: -24px;
	right: -32px;
	width: 660px;
	border-radius: 12px;
	padding: 24px 32px 16px 32px;
	background-color: white;
	box-shadow: 0px 0px 8px #B0B0B0;
	z-index: 1;
`
const PayCalTitle = styled.div`
	line-height: 26px;
	font-size: 22px;
	font-weight: 600;
	color: #222222;
`
const PayCalText = styled.div`
	word-break: keep-all;
	padding-top: 8px;
	font-size: 14px;
	font-weight: 400;
	color: #717171;
`
const PayDateInCal = styled.div`
	width: 50%;
	height: 56px;
	border-radius: 8px;
	border: 1px solid #B0B0B0;
	background-color: #F7F7F7;
`

export const PayCal = () => {

	const calRef = useRef();
	const dispatch = useDispatch();
	const booking = useSelector(state => state.booking);

	useEffect(() => {
		const handler = (event) => {
			if (calRef.current && !calRef.current.contains(event.target))
				dispatch(setOpenCal(false))
		};

		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	});

	return (
		<PayCalWrap ref={calRef}>
			<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height: "70px"}}>
				<div style={{width: "50%"}}>
					<PayCalTitle>
						{booking.checkoutDate ? `${calNight(booking.checkinDate, booking.checkoutDate)}박` : "날짜 선택"}
					</PayCalTitle>
					<PayCalText>
						{booking.checkoutDate ? `${booking.checkinDate}-${booking.checkoutDate}` : "여행 날짜를 입력하여 정확한 요금을 확인하세요."}
					</PayCalText>
				</div>
				<PayDateInCal>
					<PayDate inCal={true}/>
				</PayDateInCal>
			</div>
			<Calendar />
		</PayCalWrap>
	);
};