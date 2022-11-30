import styled, {css} from "styled-components";
import Calendar from "./Explanation_com/Calendar_Com/Calendar";

const PayCalWrap = styled.div`
	position: absolute;
	top: 18px;
	right: -32px;
	width: 500px;
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