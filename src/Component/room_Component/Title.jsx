import styled, {css} from "styled-components";
import { StarSvg } from "../svg";
import expl, {average} from "../dummy";


const TitleText = styled.div`
	font-size: 26px;
	font-weight: 600;
	margin-bottom: 4px;
	height: 30px;
`

const TitleExtra = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 4px;
	font-size: 14px;
	height: 28px;
`
const TitleBtn = styled.button`
	background-color: inherit;
	border-style: none;
	font-weight: 600;
	text-decoration: underline;
	cursor: pointer;

	${props =>
		props.shadow &&
		css`
			border-radius: 8px;
			&:hover {
				background-color: #F7F7F7;
			}
		`}
`
const Title = () => {

	return (
		<div style={{display: "flex", flexDirection: "column", padding: "26px 80px 0 80px"}}>
			<TitleText>
				{expl.title}
			</TitleText>
			<TitleExtra>
				<div style={{display: "flex", flexDirection: "row"}}>
					<div style={{marginRight: "4px"}}><StarSvg /></div>
					<b>{average.total.toFixed(2)} · </b>&nbsp;
					<TitleBtn>후기 {expl.review_list.length}개</TitleBtn>
					&nbsp;· 슈퍼호스트 ·&nbsp;
					<TitleBtn>{expl.location}</TitleBtn>
				</div>
				<div style={{display: "flex", flexDirection: "row"}}>
					<TitleBtn shadow={true}>공유하기</TitleBtn>
					<TitleBtn shadow={true}>저장</TitleBtn>
				</div>
			</TitleExtra>
		</div>
	)
};

export default Title;