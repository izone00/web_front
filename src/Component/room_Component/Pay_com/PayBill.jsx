import styled from "styled-components";
import { useSelector } from "react-redux";
import expl from "../../dummy";
import { calNight } from "../Calendar_Com/monthList";
import { Fragment } from "react";

const PayBillWrap = styled.div`
	box-sizing: border-box;
	width: 100%;
	margin-top: 24px;
`
const BillMessageWrap = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 8px;
`
const BillMessage = styled.div`
	margin-top: 8px;
	line-height: 18px;
	color: #222222;
	font-size: 14px;
	font-weight: 400;
`
const BillDetail = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 20px;
	padding-top: ${props => props.padTop}px;
	font-size: 16px;
	font-weight: 400;
`
const BillTotal = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 20px;
	margin-top: 24px;
	padding-top: 24px;
	border-top: 1px solid #B0B0B0;
	font-size: 16px;
	font-weight: 600;
`
export const PayBill = () => {

	const booking = useSelector(state => state.booking);
	let num = booking.adultNum + booking.childNum;
	let night = calNight(booking.checkinDate, booking.checkoutDate);

	return (
		<Fragment>
			<BillMessageWrap>
				<BillMessage>
					예약 확정 전에는 요금이 청구되지 않습니다.
				</BillMessage>
			</BillMessageWrap>
			<PayBillWrap>
				<BillDetail padTop={0}>
					<div><u>{`₩${(expl.price * num).toLocaleString('ko-KR')} x ${night}박`}</u></div>
					<div>₩{(expl.price * num * night).toLocaleString('ko-KR')}</div>
				</BillDetail>
				<BillDetail padTop={16}>
					<div><u>서비스 수수료</u></div>
					<div>₩{Math.floor(expl.price * num * night * 14 / 100).toLocaleString('ko-KR')}</div>
				</BillDetail>
				<BillTotal padTop={16}>
					<div>총 합계</div>
					<div>₩{(expl.price * num * 3 + Math.floor(expl.price * night * 14 / 100)).toLocaleString('ko-KR')}</div>
				</BillTotal>
			</PayBillWrap>
		</Fragment>
	)
}