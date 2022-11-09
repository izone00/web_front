import styled, {css} from "styled-components";
import expl from "../dummy";
import { SubTitle, MoreBtn, BigBtn } from "../util";
import { StarSvg } from "../svg";

const HostWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: baseline;
	margin-bottom: 24px;
`
const HostImgBtn = styled.div`
	width: 64px;
	height: 64px;
	margin-right: 16px;
	border-radius: 50%;
`
const HostTitleWrap = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: -12px;
	margin-bottom: 12px;
`
const HostTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 12px;
	padding: 0 12px;
	line-height: 20px;
	font: 400 16px;
`
const HostText = styled.div`
	position: relative;
	white-space: pre-wrap;
	word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow: hidden;
	margin-bottom: 24px;
	line-height: 24px;
`
const Hostdata = styled.div`
	margin-bottom: 16px;
	line-height: 20px;
	font: 400 16px;
`
const Host = () => {
	
	return (
		<div style={{padding: "0 80px"}}>
			<div style={{padding: "48px 0", borderBottom: "1px solid #DDDDDD"}}>
				<HostWrap>
					<HostImgBtn>
						<img src={expl.img_src} alt="img" style={{width: "100%", height: "100%", borderRadius: "50%"}} />
					</HostImgBtn>
					<div style={{display: "flex", flexDirection: "column"}}>
						<SubTitle>
							호스트: {expl.host}님
						</SubTitle>
						<div style={{paddingTop: "8px", lineHeight: "18px", fontSize: "14px", fontWeight: "400", color: "#717171"}}>
							회원 가입입: {expl.sign_date}
						</div>
					</div>
				</HostWrap>
				<div style={{display: "flex", flexDirection: "row", width: "100%"}}>
					<div style={{boxSizing: "border-box", width: "50%", paddingRight: "10%"}}>
						<HostTitleWrap>
							<HostTitle>
								<StarSvg />
								<div style={{marginLeft: "12px"}}>
									후기 {expl.review_list.length}개
								</div>
							</HostTitle>
							<HostTitle>
								본인 인증 완료
							</HostTitle>
							<HostTitle>
								슈퍼 호스트
							</HostTitle>
						</HostTitleWrap>
						<HostText>
							{expl.host_text}
							<div style={{position: "absolute", bottom: "0", right: "0"}}>
								<MoreBtn>
									더 읽기
								</MoreBtn>
							</div>
						</HostText>
						<div style={{marginBottom: "8px", lineHeight: "20px", fontSize: "16px", fontWeight: "600"}}>
							숙박 중 게스트와의 교류
						</div>
						<HostText>
							{expl.host_to_geust}
						</HostText>
						<div style={{marginBottom: "8px", lineHeight: "20px", fontSize: "16px", fontWeight: "600"}}>
							{expl.host}님은 슈퍼호스트입니다.	
						</div>
						<HostText>
						슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다.
						</HostText>
					</div>
					<div style={{width: "50%"}}>
						<Hostdata>
							언어: English, 한국어
						</Hostdata>
						<Hostdata>
							응답률: 100%
						</Hostdata>
						<Hostdata>
							응답 시간: 1시간 이내
						</Hostdata>
						<div style={{marginTop: "32px"}}>
							<BigBtn>
								호스트에게 연락하기
							</BigBtn>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Host;