import styled from "styled-components";
import { clearDate } from "./bookingSlice";
import { useDispatch } from "react-redux";

const DelBtn = styled.button`
	position: absolute;
	right: 0;
	bottom: 0;
`

export const CalClearBtn = () => {
	const dispatch = useDispatch();

	return (
		<DelBtn onClick={() => dispatch(clearDate())}>
				날짜 지우기
		</DelBtn>
	)
}
