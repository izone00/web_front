import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PayFont } from "./PayOpt";
import { PayGuestMenu } from "./PayGuestMenu";

const PayGuestWrap = styled.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	padding: 14px 12px 10px 12px;
`


export const PayGuest = () => {

	const booking = useSelector(state => state.booking);
	const [GuestMenuOpen, setGuestMenuOpen] = useState(false);

	const oepnGuestMenu = (e) => {
		if (!GuestMenuOpen) {
			setGuestMenuOpen(true);
			e.stopPropagation();
		}
	}

	return (
		<PayGuestWrap onClick={(e) => oepnGuestMenu(e)}>
			<PayFont>인원</PayFont>
			게스트 {booking.adultNum + booking.childNum}명
			{booking.babeNum ? `, 유아 ${booking.babeNum}명` : ""}
			{booking.petNum ? `, 애완동물 ${booking.petNum}마리` : ""}
			{GuestMenuOpen && <PayGuestMenu setGuestMenuOpen={setGuestMenuOpen}/>}
		</PayGuestWrap>
	)
}