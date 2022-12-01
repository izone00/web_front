import styled from "styled-components";
import { PayFont } from "./PayOpt";

const PayCheckinWrap = styled.div`
	width: 50%;
	padding: 14px 12px 10px 12px;
	border-right: 1px solid #B0B0B0;
`

export const PayCheckin = () => {

	return (
		<PayCheckinWrap>
			<PayFont>체크인</PayFont>
			<div style={{ lineHeight: "18px", color: "#717171", lineHeight: "20px" }}>
				날짜 추가
			</div>
		</PayCheckinWrap>
	)
}