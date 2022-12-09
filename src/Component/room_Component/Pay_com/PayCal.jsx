import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setOpenCal } from "../../../features/booking/bookingSlice";
import { PayDate } from "./PayDate";
import Calendar from "../Calendar_Com/Calendar";

const PayCalWrap = styled.div`
	position: absolute;
	box-sizing: border-box;
	top: -24px;
	right: -32px;
	width: 660px;
	padding: 24px 32px 16px 32px;
	background-color: white;

	z-index: 1;
	//temp
	border: 1px black solid;
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
					<div>
						 날짜 선택
					</div>
					<div style={{marginRight: "24px"}}>
						여행 날짜를 입력하여 정확한 요금을 확인하세요.
					</div>
				</div>
				<PayDateInCal>
					<PayDate inCal={true}/>
				</PayDateInCal>
			</div>
			<Calendar />
		</PayCalWrap>
	);
};