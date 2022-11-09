import styled, {css} from "styled-components";

const MoreBtn = styled.button`
	cursor: pointer;
	height: 20px;
	padding: 0;
	border-style: none;
	background-color: inherit;
	text-decoration: underline;
	font-weight: 600;
	font-size: 16px;
`
const SubTitle = styled.div`
	font-size: 22px;
	font-weight: 600;
	line-height: 26px;
`
const BigBtn = styled.button`
	padding: 13px 23px;
	background-color: inherit;
	border: 1px solid black;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 600;
	cursor: pointer;
`
export {MoreBtn, SubTitle, BigBtn};