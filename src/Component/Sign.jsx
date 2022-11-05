import styled, {css} from "styled-components";

const SignModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 40px;
`
const SignCon = styled.div`
	background-color: skyblue;
	display: flex;
	flex-direction: column;
	width: 568px;//
	z-index: 99;
`
const SignHeader = styled.header`
	display	: flex;
	flex-direction: row;
	box-sizing: border-box;
	width: 100%;
	height: 64px;
	border-bottom: 1px solid #B0B0B0;
	padding: 0 24px;
`
const SignExitBtn = styled.button`
	
`
const SignBody = styled.div`
	display: flex;
 	flex-direction: column;
	height: 570px;
	padding: 24px;
`
// const SignMain = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `
const SignInputBox = styled.div`
	
`
const SignNextBtn = styled.button`
	
`
// const SignFooter = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `
const SignExternLink = styled.button`
	
`
const Sign = () => {

	return (
		<SignModal>
			<SignCon>
				<SignHeader>
					<SignExitBtn>

					</SignExitBtn>
					<div>
						로그인및 회원가입
					</div>
				</SignHeader>
				<SignBody>
					{/* <SignMain> */}
					<div>
						에어비앤비에 오신걸 환영합니다.
					</div>
					<SignInputBox>

					</SignInputBox>
					<div>
						안내메세지
					</div>
					<SignNextBtn>

					</SignNextBtn>
					{/* </SignMain> */}
					<div>또는</div>
					{/* <SignFooter> */}
					<SignExternLink>
						구글 로그인
					</SignExternLink>
					<SignExternLink>
						페이스북 로그인
					</SignExternLink>
					{ }
				</SignBody>
			</SignCon>
		</SignModal>
	)
};

export default Sign;