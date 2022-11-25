import styled, {css} from "styled-components";
import expl, {average} from "../dummy";
import { StarSvg } from "../svg";
import { Counter } from "../../features/counter/Counter";

const PayCon = styled.div`
	position: sticky;
	float: right;
	top: 48px;
	width: 70%;
	border: 1px solid #DDDDDD;
	border-radius: 12px;
	margin: 48px 0;
	padding: 24px;
`
const PayText = styled.div`
	font-size: 22px;
	line-height: 26px;
	word-break: keep-all;
`
const PayReview = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 8px;
	margin-bottom: 24px;
	font-size: 14px;
	font-weight: 600;
`
const PayCheck = styled.div`
	margin-bottom: 16px;
	border-radius: 8px;
	border: 1px solid #B0B0B0;
`
const PayFont = styled.div`
	font-size: 10px;
	font-weight: 700;
	line-height: 12px;
`
const PayOK = styled.button`
	width: 100%;
	height: 48px;
	text-align: center;
	font-size: 16px;
	font-weight: 600;
	color: #FFFFFF;
	background-image: linear-gradient(to right,#E61E4D 0%,#E31C5F 50%,#D70466 100%);
	border-style: none;
	border-radius: 8px;
	cursor: pointer;
`
const Pay = () => {
	
	return (
		<PayCon>
			<PayText>
				요금을 확인하려면 날짜를 입력하세요.
			</PayText>
			<PayReview>
				<StarSvg />
					&nbsp;{average.total.toFixed(2)} ·
				<span style={{color: "#717171", textDecoration: "underline"}}>
					&nbsp;후기 {expl.review_list.length}개
				</span>
			</PayReview>
			<PayCheck>
				<div>
					<div style={{display: "flex", flexDirection: "row", borderBottom: "1px solid #B0B0B0"}}>
						<div style={{width: "50%", padding: "14px 12px 10px 12px", borderRight: "1px solid #B0B0B0"}}>
							<PayFont>체크인</PayFont>
							<div style={{lineHeight: "18px", color: "#717171", lineHeight: "20px"}}>
								날짜 추가
							</div>
						</div>
						<div style={{width: "50%", padding: "14px 12px 10px 12px"}}>
							<PayFont>체크아웃</PayFont>
							<div style={{lineHeight: "18px", color: "#717171", lineHeight: "20px"}}>
								날짜 추가
							</div>
						</div>
					</div>
				</div>
				<div style={{width: "100%", padding: "14px 12px 10px 12px"}}>
					<PayFont>인원</PayFont>
					게스트 명
					<Counter />
				</div>
			</PayCheck>
			<PayOK>
				예약 가능 여부 보기
			</PayOK>
		</PayCon>
	);
};

export default Pay;