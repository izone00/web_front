import styled from "styled-components";
import { clearDate } from "./bookingSlice";
import { useDispatch } from "react-redux";

const DelBtn = styled.button`
	cursor: pointer;
	float: right;
	border-style: none;
	border-radius: 5px;
	padding: 8px;
	background-color: inherit;
	line-height: 18px;
	font-size: 14px;
	font-weight: 600;
	text-decoration: underline;

	&:hover {
		background-color: #F7F7F7;
	}
`

export const CalClearBtn = () => {
	const dispatch = useDispatch();

	return (
		<DelBtn onClick={() => dispatch(clearDate())}>
				날짜 지우기
		</DelBtn>
	)
}
