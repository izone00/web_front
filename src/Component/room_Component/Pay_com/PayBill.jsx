import styled from "styled-components";
import { useSelector } from "react-redux";
import expl from "../../dummy";
import { calNight } from "../Calendar_Com/monthList";

const PayBillWrap = styled.div`
	box-sizing: border-box;
	width: 100%;
	margin-top: 24px;
`
const BillDetail = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 20px;
	padding-top: 16px;

`
const BillTotal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 20px;
	margin-top: 24px;
	padding-top: 24px;
	border-top: 1px solid #B0B0B0;
`
export const PayBill = () => {

	const booking = useSelector(state => state.booking);
	let num = booking.adultNum + booking.childNum;
	let night = calNight(booking.checkinDate, booking.checkoutDate);

	return (
		<PayBillWrap>
			<BillDetail>
				<div>{`\\${expl.price * num} X ${night}박`}</div>
				<div>\{expl.price * num * night}</div>
			</BillDetail>
			<BillDetail>
				<div>서비스 수수료</div>
				<div>\{Math.floor(expl.price*num*night*14/100)}</div>
			</BillDetail>
			<BillTotal>
				<div>총 합계</div>
				<div>\{expl.price*num*3 + Math.floor(expl.price*night*14/100)}</div>
			</BillTotal>
		</PayBillWrap>
	)
}