import styled, {css} from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	updateCheckin,
	updateCheckout,
	dateCmp,
} from "../../features/booking/bookingSlice"


const CalDayBtn = styled.button`
	cursor: pointer;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 0;
	transform: translate(0,-50%);
	border: 1px solid white;
	padding: 0;
	font-weight: 600;
	background-color: inherit;
	&:hover {
		border-radius: 50%;
		border: 1.5px solid black;
	}

	${props =>
		props.clicked &&
		css`
			color: white;
			background-color: #222222;
			border-radius: 50%;
		`}
		
	${props =>
		props.between &&
		css`
			/* background-color: red;
			border-right-color: red;
			border-left-color: red; */
			background-color: #F7F7F7;
			border-right-color: #F7F7F7;
			border-left-color: #F7F7F7;
		`}

	${props =>
		props.disable && 
		css`
			font-weight: 400;
			color: #B0B0B0;
			text-decoration: line-through;
			&:hover {
				border-style: none;
			}
		`}
`

export const CalBookBtn = ({day}) => {
	const booking = useSelector(state => state.booking);
	const dispatch = useDispatch();

	const clickDay = (date) => {
		if (!booking.checkinDate || booking.checkoutDate) {
			dispatch(updateCheckin(date));
			dispatch(updateCheckout(""));
		 }
		else
			dispatch(updateCheckout(date));
	}

	return (
		<CalDayBtn
			disable={day.booked || (!booking.checkoutDate  && booking.checkinDate && (dateCmp(day.date, booking.checkinDate) || dateCmp(booking.availableMaxDate, day.date)))}
			clicked={day.date && (day.date === booking.checkinDate || day.date === booking.checkoutDate)}
			between={day.date && booking.checkoutDate && (dateCmp(booking.checkinDate, day.date) && dateCmp(day.date, booking.checkoutDate))}
			onClick={() => clickDay(day.date)}
		>
			{day.date.split('.')[2] || ""}
		</CalDayBtn>
	)
}

// no click -> 예약된거만 닫기
// checkin click -> 예약 불가능한 날짜 닫기 (hover이벤트 해야함)
// checkout click -> 예약한 날짜 이외에 열기 