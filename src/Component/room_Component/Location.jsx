import styled, {css} from "styled-components";
import expl from "../dummy";
import { SubTitle, MoreBtn } from "./util";
import { ArrowSvg } from "../svg";

const LocaTitle = styled.div`
	margin-bottom: 16px;
	font-size: 16px;
	font-weight: 600;
	line-height: 20px;
`
const LocaText = styled.div`
	line-height: 20px;
	white-space: pre-wrap;
	word-break: keep-all;
`
const Location = () => {
	
	return (
		<div style={{padding: "0 80px"}}>
			<div style={{padding: "48px 0", borderBottom: "1px solid #DDDDDD"}}>
				<SubTitle>
					<div style={{paddingBottom: "24px"}}>
						호스팅 지역
					</div>
				</SubTitle>
				<div style={{fontSize: "200px", textAlign: "center"}}>지도</div>
				<div style={{marginTop: "24px", paddingLeft: "8px"}}>
					<LocaTitle>
						{expl.location}
					</LocaTitle>
					<LocaText>
						{expl.loca_text}
					</LocaText>
					<MoreBtn>
						<div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "16px"}}>
							더보기
							<div style={{marginLeft: "4px"}}>
								<ArrowSvg />
							</div>
						</div>
					</MoreBtn>
				</div>
			</div>
		</div>
	);
};

export default Location;