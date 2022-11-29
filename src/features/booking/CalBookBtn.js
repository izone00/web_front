import styled, {css} from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	updateCheckin,
	updateCheckout,
	updateHoverDate,
	dateCmp,
} from "./bookingSlice"

const CaldayWrap = styled.td`
	position: relative;
	box-sizing: border-box;
	background-color: inherit;
	border: 0.5px solid white;
	padding: 0;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}

	${props =>
		props.checkin ?
		css`
			background: linear-gradient(to left, #F7F7F7, #FFFFFF);
			border-right-color: #F7F7F7;
		` :
		(props.checkout &&
		css`
			background: linear-gradient(to right, #F7F7F7, #FFFFFF);
			border-left-color: #F7F7F7;
		`)}
	
	${props =>
		props.between &&
		css`
			background-color: #F7F7F7;
			border-right-color: #F7F7F7;
			border-left-color: #F7F7F7;
		`}
`

const CalDayBtn = styled.button`
	cursor: pointer;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 0;
	transform: translate(0,-50%);
	border: none;
	padding: 0;
	font-weight: 600;
	background-color: inherit;

	${props =>
		props.clicked ?
		css`
			cursor: auto;
			color: white;
			background-color: #222222;
			border-radius: 50%;
		` :
		(!props.unavailable &&
		((!props.checkin || props.checkout) ?
		css`
			&:hover {
				border-radius: 50%;
				border: 1px solid black;
				background-color: white;
			}
		` :
		css`
			&:hover {
				border-radius: 50%;
				border: 1px solid black;
				background-color: #F7F7F7;
			}
		`))}

	${props =>
		props.unavailable && 
		css`
			cursor: auto;
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
		else if (booking.checkinDate !== date)
			dispatch(updateCheckout(date));
	}

	const enterDay = (day) => {
		if (!(day.booked || (!booking.checkoutDate && booking.checkinDate && (dateCmp(day.date, booking.checkinDate) || dateCmp(booking.availableMaxDate, day.date)))))
			dispatch(updateHoverDate(day.date));
	}
	
	return (
		<CaldayWrap 
			checkin={(booking.checkoutDate || booking.hoverDate) && day.date && day.date === booking.checkinDate}
			checkout={booking.checkinDate && day.date && (day.date === booking.checkoutDate || (!booking.checkoutDate && day.date === booking.hoverDate))}
			between={day.date && booking.checkoutDate ? (dateCmp(booking.checkinDate, day.date) && dateCmp(day.date, booking.checkoutDate)) : (booking.checkinDate && booking.hoverDate && dateCmp(booking.hoverDate, booking.availableMaxDate) && dateCmp(booking.checkinDate, day.date) && dateCmp(day.date, booking.hoverDate))}
			onMouseEnter={() => enterDay(day)}
			onMouseLeave={() => dispatch(updateHoverDate(""))}
		>
			<CalDayBtn
				unavailable={day.booked || (!booking.checkoutDate && booking.checkinDate && (dateCmp(day.date, booking.checkinDate) || dateCmp(booking.availableMaxDate, day.date)))}
				clicked={day.date && (day.date === booking.checkinDate || day.date === booking.checkoutDate)}
				checkout={booking.checkoutDate}
				checkin={booking.checkinDate}
				onClick={() => clickDay(day.date)}
			>
				{day.date.split('.')[2] || ""}
			</CalDayBtn>
		</CaldayWrap>
	)
}

// no click -> 예약된거만 닫기
// checkin click -> 예약 불가능한 날짜 닫기 (hover이벤트 해야함)
// checkout click -> 예약한 날짜 이외에 열기 