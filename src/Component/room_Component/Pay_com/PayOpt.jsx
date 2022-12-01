import styled from "styled-components";
import { PayDate } from "./PayDate";
import { PayGuest } from "./PayGuest";

const PayOptWrap = styled.div`
	margin-bottom: 16px;
	border-radius: 8px;
	border: 1px solid #B0B0B0;
`
export const PayFont = styled.div`
	font-size: 10px;
	font-weight: 700;
	line-height: 12px;
`

export const PayOpt = () => {

	return (
		<PayOptWrap>
			<PayDate />
			<PayGuest />
		</PayOptWrap>
	)
}
