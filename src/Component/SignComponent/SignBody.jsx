import { useRef, useState } from "react";
import styled, {css} from "styled-components";
import { AlertSvg } from "../svg";

const SignBodyCon = styled.div`
	display: flex;
 	flex-direction: column;
	padding: 24px;
`
const SignBodyTitle = styled.div`
	margin: 8px 0 32px 0;
	line-height: 26px;
	font-size: 22px;
	font-weight: 600;
`
const SignInputWrap = styled.div`
	width: 100%;
	border: 1px solid #B0B0B0;
	border-radius: 8px;
`
const SignContryWap = styled.div`
	position: relative;
	width: 100%;
	height: 56px;
`
const SignTextWrap = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 56px;
	border-top: 1px solid #B0B0B0;

	${props => 
		props.focus &&
		css`
			border-radius: 8px;
			border: 2px solid black;
			margin-bottom: -3px;
			margin-left: -1px;
		`}
`
const SignTextTitle = styled.div`
	position: absolute;
	top: 18px;
	left: 12px;
	font-weight: 400;
	color: rgb(113, 113, 113);
	transition: 0.2s ease;

	${props =>
		((props.focus && props.input === "") || props.input !== "") &&
		css`
			top: 6px;
			font-size: 12px;
		`}
`
const SignConNum = styled.div`
	padding: 26px 0 0 12px;
	margin-right: -6px;
	/* width: 8%; */
	line-height: 20px;
	font-size: 16px;
	color: #222222;
	visibility: hidden;

	${props =>
		((props.focus && props.input === "") || props.input !== "") &&
		css`
			visibility: visible;
		`}
`
const SignInputBox = styled.input`
	width: 100%;
	margin: 26px 12px 6px 12px;
	padding: 0;
	border-style: none;
	outline: none;
	font-size: 16px;
	color: #222222;
`
const SignRuleAlert = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 8px;
	line-height: 16px;
	font-size: 12px;
	font-weight: 400;
	color: #C13515;
`
const SignSubmitBtn = styled.button`
	cursor: pointer;
	width: 100%;
	height: 48px;
	margin: 16px 0 24px 0;
	border-radius: 8px;
	border-style: none;
	color: white;
	line-height: 20px;
	font-size: 16px;
	font-weight: 600;

	background-image: radial-gradient(circle at center center, rgb(255, 56, 92) 0%, rgb(230, 30, 77) 27.5%, rgb(227, 28, 95) 40%, rgb(215, 4, 102) 57.5%, rgb(189, 30, 89) 75%, rgb(189, 30, 89) 100%) !important;
`
const SignBodyLineWrap = styled.div`
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
	width: 100%;
	padding: 13px 23px;
	border: 1px solid #343434;
	border-radius: 8px;
	margin-bottom: 16px;
	line-height: 20px;
	font-size: 14px;
	font-weight: 600;
	background-color: inherit;
	&:hover {
		background-color: #F7F7F7;
	}
	${props => 
		props.children === "이메일로 로그인" &&
		css`
			margin-bottom: 0;
		`}
`
const CountryList = {
	"242CG" : ["콩고", "+242"],
	"82KO" : ["한국", "+82"],
}
const SignBody = () => {

	const [conNum, setConNum] = useState("82KO");
	const [inputFocus, setInputFocus] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [ruleValid, setRuleValid] = useState("");

	const changeCountry = (e) => {
		setConNum(e.target.value);
	};
	

	const inputBoxFocus = (e) => {
		setInputFocus(true);
	};

	const inputBoxBlur = (e) => {
		setInputFocus(false);
	};
	
	const writeInput = (e) => {
		setInputValue(e.target.value);
		setRuleValid("");
	}

	const isValid = (e) => {
		if (inputValue.length < 11) {
			e.preventDefault();
			if (inputValue === "")
				setRuleValid("전화번호는 필수항목입니다.");
			else
				setRuleValid("전화번호가 너무 짧거나 유효하지 않은 문자를 포함합니다.");
		}
	}

	return (
		<SignBodyCon>
			<SignBodyTitle>
				에어비앤비에 오신걸 환영합니다.
			</SignBodyTitle>
			<form onSubmit={isValid}>
				<SignInputWrap>
					<SignContryWap>
						<div style={{ position: "absolute", top: "6px", left: "12px", color: "rgb(113, 113, 113)", fontSize: "12px", fontWeight: "400" }}>
							국가/지역
						</div>
						<select name="country" value={conNum} style={{ width: "100%", padding: "26px 36px 10px 12px", fontSize: "16px", borderStyle: "none", backgroundColor: "inherit" }} onChange={changeCountry}>
							<option value="242CG">콩고 (+242)</option>
							<option value="82KO">대한민국 (+82)</option>
						</select>
					</SignContryWap>
					<SignTextWrap focus={inputFocus}>
						<SignTextTitle focus={inputFocus} input={inputValue}>
							전화번호
						</SignTextTitle>
						<SignConNum focus={inputFocus} input={inputValue}>
							{CountryList[conNum][1]}
						</SignConNum>
						<SignInputBox type="text" onFocus={inputBoxFocus} onBlur={inputBoxBlur} onChange={writeInput}/>
					</SignTextWrap>
				</SignInputWrap>
				{ruleValid != "" &&
					<SignRuleAlert>
						<div style={{ marginRight: "8px" }}>
							<AlertSvg />
						</div>
						{ruleValid}
					</SignRuleAlert>}
				<div style={{ fontSize: "12px", marginTop: "8px" }}>
					전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및 데이터 요금이 부과됩니다.
					<a href="./" style={{ fontWeight: "600", color: "black" }}>개인정보 처리방침</a>
				</div>
				<SignSubmitBtn type="submit">
					계속
				</SignSubmitBtn>
			</form>
			<SignBodyLineWrap>
				<SignBodyLine>
					또는
				</SignBodyLine>
			</SignBodyLineWrap>
			<SignExternLink>
				페이스북으로 로그인하기
			</SignExternLink>
			<SignExternLink>
				구글로 로그인하기
			</SignExternLink>
			<SignExternLink>
				Apple 계정으로 계속하기
			</SignExternLink>
			<SignExternLink marign="0">
				이메일로 로그인하기
			</SignExternLink>
		</SignBodyCon>
	);
};

export default SignBody;