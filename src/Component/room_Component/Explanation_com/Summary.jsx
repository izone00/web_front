import styled, {css} from "styled-components";
import expl from "../../dummy";

const SummaryBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 48px 0 24px 0;
	border-bottom: 1px solid  #DDDDDD;
`
const SummaryBtn = styled.button`
	height: 56px;
	width: 56px;
	background-color: inherit;
	border-style: none;
	padding: 0;
	cursor: pointer;
`
const SummaryTitle = styled.div`
	font-weight: 600;
	font-size: 22px;
	margin-bottom: 8px;
`
const SummaryOpt = styled.div`

`
const Summary = () => {

	return (
		<SummaryBox>
			<div style={{display: "flex", flexDirection: "column"}}>
				<SummaryTitle>
					{expl.title}
				</SummaryTitle>
				<SummaryOpt>
					{expl.option}
				</SummaryOpt>
			</div>
			<SummaryBtn>
				<img style={{width: "100%", height: "100%", borderRadius: "50%"}} src={expl.img_src} alt="img" />
			</SummaryBtn>
		</SummaryBox>
	);
};

export default Summary;