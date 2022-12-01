import styled, {css} from "styled-components";
import Calendar from "../Calendar_Com/Calendar";

const PayCalWrap = styled.div`
	position: absolute;
	box-sizing: border-box;
	top: -24px;
	right: -32px;
	width: 660px;
	padding: 24px 32px 16px 32px;
	background-color: white;

	//temp
	border: 1px black solid;
`


export const PayCal = () => {

	return (
		<PayCalWrap>
			
			<Calendar />
		</PayCalWrap>
	);
};