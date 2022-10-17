import styled, {css} from "styled-components";
import { MoreBtn } from "../../util";
import expl from "../../dummy";

const AirBox = styled.div`
	padding: 32px 0;
	border-bottom: 1px solid #DDDDDD;
`

const AirCover = () => {
	
	return (
		<AirBox>
			<div style={{width: "97px", height: "26px", marginBottom: "16px"}}>
				<img style={{width: "100%", height: "100%"}} src={expl.aircover.img} alt="에어커버" />
			</div>
			<div style={{marginBottom: "16px", wordBreak: "keep-all", lineHeight: "20px"}}>
				{expl.aircover.text}
			</div>
			<MoreBtn>더 알아보기</MoreBtn>
		</AirBox>
	);
};

export default AirCover;