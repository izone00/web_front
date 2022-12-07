import styled from "styled-components";
import { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { PayCheckin } from "./PayCheckin";
import { PayCheckout } from "./PayCheckout";
import { PayFont } from "./PayOpt";
import { PayCal } from "./PayCal";


const PayDateWrap = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #B0B0B0;
`
const PayCheckinWrap = styled.div`
	width: 50%;
	padding: 14px 12px 10px 12px;
	border-right: 1px solid #B0B0B0;
`
const PayCheckoutWrap = styled.div`
	width: 50%;
	padding: 14px 12px 10px 12px;
	border-right: 1px solid #B0B0B0;
`

export const PayDate = () => {

	const [openCal, setOpenCal] = useState(false);
	const booking = useSelector(state => state.booking);

	const calOpen = (e) => {
		if (!openCal) {
			setOpenCal(true);
			e.stopPropagation();
		}
	}

	return (
		<PayDateWrap onClick={(e) => calOpen(e)}>
			{openCal && <PayCal setOpenCal={setOpenCal}/>}
			<PayCheckinWrap>
				<PayFont>체크인</PayFont>
				<div style={{ lineHeight: "18px", color: "#717171", lineHeight: "20px" }}>
					{booking.checkinDate ? booking.checkinDate : "날짜 추가"}
				</div>
			</PayCheckinWrap>
			<PayCheckoutWrap>
				<PayFont>체크아웃</PayFont>
				<div style={{ lineHeight: "18px", color: "#717171" }}>
				{booking.checkoutDate ? booking.checkoutDate : "날짜 추가"}
				</div>
			</PayCheckoutWrap>
		</PayDateWrap>
	)
}