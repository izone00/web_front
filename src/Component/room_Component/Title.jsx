import styled, {css} from "styled-components";
import { StarSvg } from "../svg";

const TitleText = styled.div`
	font-size: 26px;
	font-weight: 600;
	margin-bottom: 4px;
	height: 30px;
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
			<TitleText>별이 보이는 감성충만 프라이빗 복층 Cosmos Room</TitleText>
			<div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", fontSize: "14px", height: "28px"}}>
				<div style={{display: "flex", flexDirection: "row", alignItems: "flex-end"}}>
					<div style={{marginRight: "4px"}}><StarSvg /></div>
					<b>4.97 · </b>&nbsp;
					<TitleBtn>후기 475개</TitleBtn>
					&nbsp;· 슈퍼호스트 ·&nbsp;
					<TitleBtn> Gimsatgat-myeon, Yeongweol, 강원도, 한국</TitleBtn>
				</div>
				<div style={{display: "flex", flexDirection: "row"}}>
					<TitleBtn shadow={true}>공유하기</TitleBtn>
					<TitleBtn shadow={true}>저장</TitleBtn>
				</div>
			</div>
		</div>
	)
};

export default Title;