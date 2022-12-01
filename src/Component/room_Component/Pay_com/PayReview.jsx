import styled from "styled-components";
import expl, { average } from "../../dummy";
import { StarSvg } from "../../svg";

const PayReviewWrap = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 8px;
	line-height: 18px;
	font-size: 14px;
	font-weight: 600;
`

export const PayReview = () => {

	return (
		<PayReviewWrap>
			<StarSvg />
			&nbsp;{average.total.toFixed(2)} ·&nbsp;
			<span style={{ color: "#717171", textDecoration: "underline" }}>
				후기 {expl.review_list.length}개
			</span>
			{/* {pay.calOpen && <PayCal />} */}
		</PayReviewWrap>
	)
}
