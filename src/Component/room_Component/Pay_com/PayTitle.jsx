import styled, {css} from "styled-components";
import { PayReview } from "./PayReview";
import { useSelector } from "react-redux";
import expl from "../../dummy";


const PayTitleWrap = styled.div`
	display: flex;
	margin-bottom: 24px;

	${props =>
		props.booking ?
		css`
			flex-direction: row;
			justify-content: space-between;
		` :
		css`
			flex-direction: column;

		`}
`


const PayTitleText = styled.div`
	font-size: 22px;
	line-height: 26px;
	word-break: keep-all;
`

export const PayTitle = () => {

	const booking = useSelector(state => state.booking);

	return (
		<PayTitleWrap booking={booking.checkoutDate}>
			<PayTitleText>
					{booking.checkoutDate ? `₩${expl.price}/박` : "요금을 확인하려면 날짜를 입력하세요."}
			</PayTitleText>	
			<PayReview />
		</PayTitleWrap>
	)
}
