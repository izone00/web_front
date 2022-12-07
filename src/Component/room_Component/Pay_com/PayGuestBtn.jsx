import styled from "styled-components";
import { useDispatch } from "react-redux";
import { decreaseGuestNum, increaseGuestNum } from "../../../features/booking/bookingSlice";

const GuestBtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 42px;
`



export const PayGuestBtn = ({guest, num}) => {

	const dispatch = useDispatch();

	return (
		<GuestBtnWrap>
			<div>{guest}</div>
			<div style={{display: "flex", flexDirection: "row"}}>
				<button onClick={() => dispatch(decreaseGuestNum(guest))}>-</button>
				<div>{num}</div>
				<button onClick={() => dispatch(increaseGuestNum(guest))}>+</button>
			</div>
		</GuestBtnWrap>
	)
}