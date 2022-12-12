import styled from "styled-components";
import { useSelector} from "react-redux";
import { useEffect, useRef } from "react";
import { PayGuestBtn } from "./PayGuestBtn";

const GuestMenuWrap = styled.div`
	position: absolute;
	box-sizing: border-box;
	top: 56px;
	left: 0;
	width: 100%;
	border-radius: 4px;
	padding: 16px;
	background-color: white;
	box-shadow: 0 0 4px #DDDDDD;
`
const GuestCloseBtn = styled.button`
	cursor: pointer;
	float: right;
	border: none;
	border-radius: 8px;
	margin: 0 -10px;
	padding: 10px;
	background-color: inherit;
	line-height: 20px;
	font-size: 16px;
	font-weight: 600;
	text-decoration: underline;

	&:hover {
		background-color: #F7F7F7;
	}
`

export const PayGuestMenu = ({setGuestMenuOpen}) => {

	const booking = useSelector(state => state.booking);
	const menuRef = useRef();

	useEffect(() => {
		const handler = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target))
				setGuestMenuOpen(false);
		};

		document.addEventListener('click', handler);

		return () => {
			document.removeEventListener('click', handler);
		};
	});
	
	return (
		<GuestMenuWrap ref={menuRef}>
			<PayGuestBtn guest="adult" num={booking.adultNum} />
			<PayGuestBtn guest="child" num={booking.childNum} />
			<PayGuestBtn guest="babe" num={booking.babeNum} />
			<PayGuestBtn guest="pet" num={booking.petNum} />
			<GuestCloseBtn onClick={() => setGuestMenuOpen(false)}>
				닫기
			</GuestCloseBtn>
		</GuestMenuWrap>
	)
}