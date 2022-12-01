import styled from "styled-components";
import { PayFont } from "./PayOpt";

const PayCheckoutWrap = styled.div`
	width: 50%;
	padding: 14px 12px 10px 12px;
	border-right: 1px solid #B0B0B0;
`

export const PayCheckout = () => {

	return (
		<PayCheckoutWrap>
			<PayFont>체크인</PayFont>
			<div style={{ lineHeight: "18px", color: "#717171"}}>
				날짜 추가
			</div>
		</PayCheckoutWrap>
	)
}