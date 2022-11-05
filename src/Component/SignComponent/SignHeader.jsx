import styled, {css} from "styled-components";
import { XSvg } from "../svg";

const SignHeadCon = styled.header`
	position: relative;
	display	: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	height: 64px;
	border-bottom: 1px solid #B0B0B0;
	padding: 0 24px;
`

const SignExitBtn = styled.button`
	cursor: pointer;
	position: absolute;
	top: 16px;
	left: 16px;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border-style: none;
	padding: 8px;
	background-color: inherit;
	&:hover {
		background-color: #EBEBEB;
		transition: 0.1s;
	}
`
const SignHeadText = styled.div`
	margin: 0 16px;
	line-height: 20px;
	font-size: 16px;
	font-weight: 800;
`
const SignHeader =  () => {
	
	return (
		<SignHeadCon>
			<SignExitBtn>
				<XSvg />
			</SignExitBtn>
			<SignHeadText>
				로그인 또는 회원가입
			</SignHeadText>
		</SignHeadCon>
	);
};

export default SignHeader;