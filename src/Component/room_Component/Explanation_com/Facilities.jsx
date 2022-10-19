import styled, {css} from "styled-components";
import { SubTitle } from "../../util";
import { FacSvg } from "../../svg";
import expl from "../../dummy";

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

const FacBtn = styled.button`
	margin-top: 24px;
	padding: 13px 23px;
	background-color: inherit;
	border: 1px solid black;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
`
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
			<FacBtn>
				편의시설 {expl.fac.length}개 모두 보기
			</FacBtn>
		</div>
	);
};

export default Facilities;