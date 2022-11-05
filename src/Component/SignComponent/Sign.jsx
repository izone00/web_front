import styled, {css} from "styled-components";
import SignHeader from "./SignHeader";
import SignBody from "./SignBody";

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
	width: 568px;
	border-radius: 12px;
	z-index: 99;
`

const Sign = () => {

	return (
		<SignModal>
			<SignCon>
				<SignHeader />
				<SignBody />
			</SignCon>
		</SignModal>
	)
};

export default Sign;