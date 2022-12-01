import styled from "styled-components";
import { useState, useEffect} from "react";
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

	// useEffect(() => {
	// 	const handler = (event) => {
	// 		if (menuListRef.current && !menuListRef.current.contains(event.target) && !props.menuBtnRef.current.contains(event.target))
	// 			props.menu(false);
	// 	};

	// 	document.addEventListener('mousedown', handler);

	// 	return () => {
	// 		document.removeEventListener('mousedown', handler);
	// 	};
	// });
	
	return (
		<PayDateWrap onClick={() => {setOpenCal(true)}}>
			{openCal && <PayCal />}
			<PayCheckinWrap>
				<PayFont>체크인</PayFont>
				<div style={{ lineHeight: "18px", color: "#717171", lineHeight: "20px" }}>
					날짜 추가
				</div>
			</PayCheckinWrap>
			<PayCheckoutWrap>
				<PayFont>체크아웃</PayFont>
				<div style={{ lineHeight: "18px", color: "#717171" }}>
					날짜 추가
				</div>
			</PayCheckoutWrap>
		</PayDateWrap>
	)
}