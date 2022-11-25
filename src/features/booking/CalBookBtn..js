import styled, {css} from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
	updateCheckin,
	updateCheckout,
} from "../../features/booking/bookingSlice"


const CalDayBtn = styled.button`
	cursor: pointer;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 0;
	transform: translate(0,-50%);
	border-style: none;
	padding: 0;
	font-weight: 600;
	background-color: inherit;
	/* &:hover {
		border-radius: 50%;
		border: 1px solid black;
	} */

	/* ${props =>
		props.click &&
		css`
			color: white;
			background-color: #222222;
			border-radius: 50%;
		`}
		
	${props =>
		props.book && !props.click &&
		css`
			&:hover {
				background-color: white;
				border: 1px solid black;
				border-radius: 50%;
			}
		`}

	${props =>
		!props.book && 
		css`
			font-weight: 400;
			color: #B0B0B0;
			text-decoration: line-through;
		`} */
`

export const CalBookBtn = ({day}) => {
	const booking = useSelector(state => state.booking);
	const dispatch = useDispatch();

	const clickDay = (day) => {
		if (booking.checkin === "" || booking.checkout !== "") {
			dispatch(updateCheckin(day));
			dispatch(updateCheckout(""));
		 }
		else
			dispatch(updateCheckout(day));
	}

	return (
		<CalDayBtn onClick={() => clickDay(day)} >
			{day.date.split('.')[2] || ""}
		</CalDayBtn>
	)
}

// no click -> 예약된거만 닫기
// checkin click -> 예약 불가능한 날짜 닫기 (hover이벤트 해야함)
// checkout click -> 예약한 날짜 이외에 열기 