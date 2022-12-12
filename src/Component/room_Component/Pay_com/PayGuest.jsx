import styled,{ css } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { PayFont } from "./PayOpt";
import { PayGuestMenu } from "./PayGuestMenu";
import { UpSvg, DownSvg } from "../../svg";

const PayGuestWrap = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 14px 12px 10px 12px;
	height: 32px;
	border-top: 1px solid #B0B0B0;
	border-radius: 0 0 8px 8px;
	${props =>
		props.click &&
		css`
			padding: 13px 12px 9px 12px;
			border: 2px solid #222222;
			border-radius: 8px;
			padding-right: 10px;
		`}
`
const PayGuestFont = styled.div`
	font-size: 14px;
	font-weight: 400;
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
		<PayGuestWrap onClick={(e) => oepnGuestMenu(e)} click={GuestMenuOpen}>
			<div>
				<PayFont>인원</PayFont>
				<PayGuestFont>
					게스트 {booking.adultNum + booking.childNum}명
					{booking.babeNum ? `, 유아 ${booking.babeNum}명` : ""}
					{booking.petNum ? `, 애완동물 ${booking.petNum}마리` : ""}
					{GuestMenuOpen && <PayGuestMenu setGuestMenuOpen={setGuestMenuOpen}/>}
				</PayGuestFont>
			</div>
			<div style={{display: "flex", alignItems: "center"}}>
				{GuestMenuOpen ? <UpSvg /> : <DownSvg />}
			</div>
		</PayGuestWrap>
	)
}
