import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { decreaseGuestNum, increaseGuestNum } from "../../../features/booking/bookingSlice";
import { MinusSvg, PlusSvg } from "../../svg";

const GuestBtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: ${props => props.guest === "adult" ? "8px" : "12px"};
	margin-bottom: 12px;
`
const GuestText = styled.div`
	line-height: 20px;
	font-size: 16px;
	font-weight: 600;
	padding-bottom: 4px;
	color: #222222;
`
const GuestLimit = styled.div`
	line-height: 18px;
	font: 14px;
	font-weight: 400;
`
const GuestBtnBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 104px;
`
const GuestNum = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
	font-weight: 400;
`
const GuestBtn = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	border: 1px solid #DDDDDD;
	background-color: inherit;
	color: #717171;

	&:hover {
		color: #222222;
		border-color: #222222;
	}
	${props =>
		props.unavailble &&
		css`
			border-color: #EBEBEB;
			color: #EBEBEB;
			pointer-events: none;
		`}
`

export const PayGuestBtn = ({guest, num}) => {

	const guestKo = {
		adult: ["성인", "만 13세 이상"],
		child: ["어린이", "만 2~12세"],
		babe: ["유아", "만 2세 미만"],
		pet: ["반려동물", "보조동물을 동반하시나요?"],
	}

	const dispatch = useDispatch();

	return (
		<GuestBtnWrap guest={guest}>
			<div style={{display: "flex", flexDirection: "column"}}>
				<GuestText>{guestKo[guest][0]}</GuestText>
				<GuestLimit>{guestKo[guest][1]}</GuestLimit>
			</div>
			<GuestBtnBox>
				<GuestBtn 
					unavailble={!num || (guest === "adult" && num <= 1)}
					onClick={() => dispatch(decreaseGuestNum(guest))}
				>
					<MinusSvg />
				</GuestBtn>
				<GuestNum>
					{num}
				</GuestNum>
				<GuestBtn onClick={() => dispatch(increaseGuestNum(guest))}>
					<PlusSvg />
				</GuestBtn>
			</GuestBtnBox>
		</GuestBtnWrap>
	)
}