import styled, {css} from "styled-components";
import SignHeader from "./SignHeader";
import SignBody from "./SignBody";
import { useEffect, useRef, useState } from "react";

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
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.5);
`
const SignCon = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	width: 568px;
	border-radius: 12px;
`

const Sign = (props) => {

	const signRef = useRef();

	useEffect(() => {
		document.body.style.overflow = "hidden";
		document.body.style.paddingRight = "15px";
		const handler = (event) => {
			if (signRef.current && !signRef.current.contains(event.target))
				props.setSignOpen(false);
		};

		document.addEventListener('mouseup', handler);
		return () => {
			document.body.style.overflow = "unset";
			document.body.style.paddingRight = "0";
			document.removeEventListener('mouseup', handler);
		};
	}, []);

	return (
		<SignModal>
			<SignCon ref={signRef}>
				<SignHeader setSignOpen={props.setSignOpen}/>
				<SignBody />
			</SignCon>
		</SignModal>
	);
};

export default Sign;