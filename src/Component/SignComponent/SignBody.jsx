import styled, {css} from "styled-components";

const SignBodyCon = styled.div`
	display: flex;
 	flex-direction: column;
	height: 570px;
	padding: 24px;
`
const SignBodyTitle = styled.div`
	margin: 8px 0 32px 0;
	line-height: 26px;
	font-size: 22px;
	font-weight: 600;
`

const SignInputbox = styled.input`
	width: 100%;
`
const SignSubmitBtn = styled.button`
	cursor: pointer;
	width: 100%;
	height: 48px;
	margin: 16px 0 24px 0;
	border-radius: 12px;
	border-style: none;
	color: white;
	line-height: 20px;
	font-size: 16px;
	font-weight: 600;

	background-image: radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%) !important;
`

const SignBodyLineBox = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 16px;
	margin: 16px 0;

`
const SignBodyLine = styled.div`
	line-height: 16px;
	line-height: strict;
	word-break: keep-all;
	font-size: 12px;
	font-weight: 400;
	 &::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		display: block;
		height: 1px;
		width: 232px;
		margin-right: 16px;
		background-color: rgb(221, 221, 221);
	}
	&:after {
		position: absolute;
		top: 50%;
		right: 0;
		content: "" ;
		display: block ;
		height: 1px ;
		width: 232px ;
		margin-left: 16px ;
		background-color: rgb(221, 221, 221) ;
	} 
`
const SignExternLink = styled.button`
	
`

const SignBody = () => {

	return (
		<SignBodyCon>
			<SignBodyTitle>
				에어비앤비에 오신걸 환영합니다.
			</SignBodyTitle>
			<form>
			<SignInputbox></SignInputbox>
			<SignInputbox></SignInputbox>
			<div style={{fontSize: "12px", marginBottom: "8px"}}>
				전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다. 
				<a href="./" style={{fontWeight: "600", color: "black"}}>개인정보 처리방침</a>
			</div>
			<SignSubmitBtn>
				계속
			</SignSubmitBtn>
			</form>
			<SignBodyLineBox>
				{/* <div style={{backgroundColor: "black", height: "1px", width: "100%"}}>
				</div> */}
				<SignBodyLine>
					또는
				</SignBodyLine>
				{/* <div style={{backgroundColor: "black", height: "1px", width: "100%"}}>
				</div> */}
			</SignBodyLineBox>
			<SignExternLink>
				구글 로그인
			</SignExternLink>
			<SignExternLink>
				페이스북 로그인
			</SignExternLink>
		</SignBodyCon>
	);
};

export default SignBody;