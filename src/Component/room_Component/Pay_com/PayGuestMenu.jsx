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
	padding: 16px;
	background-color: white;

	//temp
	border: 1px solid black;
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
		</GuestMenuWrap>
	)
}