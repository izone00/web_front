import styled from "styled-components";
import { useSelector } from "react-redux";

const PayOkWrap = styled.button`
	cursor: pointer;
	width: 100%;
	height: 48px;
	border-style: none;
	border-radius: 8px;
	background-image: linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%);
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	color: #FFFFFF;
`

export const PayOk = () => {

	const booking = useSelector(state => state.booking)
	return (
		<PayOkWrap>
			{booking.checkoutDate ? "예약하기" : "예약 가능 여부 보기"}
		</PayOkWrap>
	)
}
