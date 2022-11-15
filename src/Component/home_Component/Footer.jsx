import styled, {css} from "styled-components";
import { MapSvg, EarthSvg } from "../svg";

const FooterWrap = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	box-sizing: border-box;
	bottom: 0;
	width: 100%;
	padding: 0 80px;
	border-top: 1px solid lightgray;
	background-color: #FFFFFF;
	z-index: 10;
`
const MapBtn = styled.button`
	cursor: pointer;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 150px;
	height: 48px;
	bottom: 40px;
	left: 50%;
	transform: translate(-50%, 0);
	border-radius: 48px;
	padding: 0 20px;
	font-size: 14px;
	font-weight: 600;
	border-style: none;
	color: white;
	background-color: rgb(34, 34, 34);
`
const FootTop = styled.div`
	display: flex;
	justify-content: space-between;
	height: 20px;
	padding: 13px 0;
	line-height: 18px;
	font-size: 14px;
	font-weight: 400;
	color: #222222;
`
const FootOtpBtn = styled.button`
	cursor: pointer;
	align-items: center;
	height: 18px;
	padding: 0 12px;
	border-style: none;
	text-align: center;
	font-size: 14px;
	font-weight: 600;
	background-color: inherit;

	&:hover {
		text-decoration: underline;
	}
`
const FootBot = styled.div`
	color: rgb(113, 113, 113);
	padding: 8px 0;
	border-top: 1px solid lightgray;
	font-size: 10px;
`
const Footer = () => {

	return (
		<FooterWrap>
			<div style={{position: "relative", width: "100%"}}>
				<MapBtn onClick={() => {alert("지도 구현 필요")}}>
					<div>지도 표시하기</div>
					<MapSvg />
				</MapBtn>
			</div>
			<FootTop>
				<div>© 2022 Airbnb, Inc.·개인정보 처리방침·이용약관·사이트맵·한국의 변경된 환불 정책·회사 세부정보</div>
				<div style={{display: "flex", alignItems: "center"}}>
					<FootOtpBtn>
						<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
							<EarthSvg />
							<div style={{marginLeft: "8px"}}>
								한국어(KR)
							</div>
						</div>
					</FootOtpBtn>
					<FootOtpBtn>
						KRW
					</FootOtpBtn>
					<FootOtpBtn>
						지원 및 참고 자료
					</FootOtpBtn>
				</div>
				</FootTop>
			<FootBot>
					웹사이트 제공자: Airbnb Ireland UC, private unlimited company, 8 Hanover Quay Dublin 2, D02 DP23 Ireland | 이사: Dermot Clarke, Killian Pattwell, Andrea Finnegan | VAT 번호: IE9827384L | 사업자 등록 번호: IE 511825 | 연락처: terms@airbnb.com, 웹사이트, 080-822-0230 | 호스팅 서비스 제공업체: 아마존 웹서비스 | 에어비앤비는 통신판매 중개자로 에어비앤비 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는 통신판매의 당사자가 아닙니다. 에어비앤비 플랫폼을 통하여 예약된 숙소, 체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는 호스트에게 있습니다.
			</FootBot>
		</FooterWrap>
	);
};

export default Footer;