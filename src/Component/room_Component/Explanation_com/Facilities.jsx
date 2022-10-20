import styled, {css} from "styled-components";
import { SubTitle } from "../../util";
import { FacSvg } from "../../svg";
import expl from "../../dummy";
import { BigBtn } from "../../util";

const FacBox = styled.div`
	display: flex;
	flex-direction: row;
`
const FacList = expl.fac.map( facil => (
	<FacBox>
			<div style={{marginRight: "16px", paddingBottom: "16px"}}><FacSvg icon={facil.icon}/></div>
			<div style={{paddingBottom: "16px"}}>{facil.text}</div>
	</FacBox>
));

const Facilities = () => {
	
	return (
		<div style={{padding: "48px 0", borderBottom: "1px solid #DDDDDD"}}>
			<SubTitle>
				<div style={{paddingBottom: "24px"}}>
				숙소 편의시설
				</div>
			</SubTitle>
			<div style={{display: "flex", flexDirection: "row"}}>
				<div style={{width: "50%"}}>
					{FacList}
				</div>
				<div style={{width: "50%"}}>
					{FacList}
				</div>
			</div>
			<div style={{marginTop: "24px"}}>
				<BigBtn>
					편의시설 {expl.fac.length}개 모두 보기
				</BigBtn>
			</div>
		</div>
	);
};

export default Facilities;