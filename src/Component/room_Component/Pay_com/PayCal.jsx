import styled, {css} from "styled-components";
import { useEffect, useRef } from "react";
import Calendar from "../Calendar_Com/Calendar";

const PayCalWrap = styled.div`
	position: absolute;
	box-sizing: border-box;
	top: -24px;
	right: -32px;
	width: 660px;
	padding: 24px 32px 16px 32px;
	background-color: white;

	z-index: 1;
	//temp
	border: 1px black solid;
`


export const PayCal = ({setOpenCal}) => {

	const calRef = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (calRef.current && !calRef.current.contains(event.target))
				setOpenCal(false);
		};

		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	});

	return (
		<PayCalWrap ref={calRef}>
			<Calendar />
		</PayCalWrap>
	);
};