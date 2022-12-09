import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setOpenCal } from "../../../features/booking/bookingSlice";
import { PayFont } from "./PayOpt";
import { PayCal } from "./PayCal";


const PayDateWrap = styled.div`
	position: relative;
	top: -1px;
	left: -1px;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 56px;
	padding-bottom: 1px;
`
const PayCheckinWrap = styled.div`
	width: 50%;
	padding: 14px 12px 10px 12px;
	border-right: 1px solid #B0B0B0;
`
const PayCheckoutWrap = styled.div`
	width: 50%;
	padding: 14px 12px 10px 12px;
`
const PayCheckFont = styled.div`
	line-height: 18px;
	font-size: 14px;
	font-weight: 400;
	color: #717171;
	
	${props =>
		props.book &&
		css`
			color: #222222;
		`}
`

export const PayDate = ({inCal}) => {

	const booking = useSelector(state => state.booking);
	const dispatch = useDispatch();

	const calOpen = (e) => {
		if (!inCal && !booking.openCal) {
			dispatch(setOpenCal(true));
			e.stopPropagation();
		}
	}

	return (
		<PayDateWrap onClick={(e) => calOpen(e)}>
			{!inCal && booking.openCal && <PayCal/>}
			<PayCheckinWrap>
				<PayFont>체크인</PayFont>
				<PayCheckFont book={booking.checkinDate}>
					{booking.checkinDate ? booking.checkinDate : "날짜 추가"}
				</PayCheckFont>
			</PayCheckinWrap>
			<PayCheckoutWrap>
				<PayFont>체크아웃</PayFont>
				<PayCheckFont book={booking.checkoutDate}>
					{booking.checkoutDate ? booking.checkoutDate : "날짜 추가"}
				</PayCheckFont>
			</PayCheckoutWrap>
		</PayDateWrap>
	)
}