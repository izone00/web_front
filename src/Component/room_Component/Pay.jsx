import styled, {css} from "styled-components";


const PayCon = styled.div`
	position: sticky;
	float: right;
	top: 48px;
	width: 70%;
	border: 1px solid #DDDDDD;
	border-radius: 12px;
	margin-top: 48px;
	padding: 24px;
`
const PayText = styled.div`
	font-size: 22px;
	line-height: 26px;
	word-break: keep-all;
`
const PayReview = styled.div`
	margin-top: 8px;
	margin-bottom: 24px;
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
			 평균평점 및 후기
			</PayReview>
			<PayCheck>
				<div>
					<div style={{display: "flex", flexDirection: "row"}}>
						<div style={{width: "50%", padding: "10px 12px"}}>
							<PayFont>체크인</PayFont>
							<div style={{lineHeight: "18px", color: "#717171"}}>날짜 추가</div>
						</div>
						<div style={{width: "50%", padding: "10px 12px"}}>
							<PayFont>체크아웃</PayFont>
							<div style={{lineHeight: "18px", color: "#717171"}}>날짜 추가</div>
						</div>
					</div>
				</div>
				<div style={{width: "100%", padding: "10px 12px"}}>
					<PayFont>인원</PayFont>
					게스트 1명
				</div>
			</PayCheck>
			<PayOK>
				예약 가능 여부 보기
			</PayOK>
		</PayCon>
	);
};

export default Pay;