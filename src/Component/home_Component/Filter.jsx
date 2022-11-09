import styled, {css} from "styled-components";
import { FilterSvg } from "./NavSvg";

const FilterWrap = styled.div`
	position: absolute;
	right: 0;
	display: flex;
	align-items: center;
	height: inherit;
	padding-right: 80px;
	background-color: white;
`
const FilterBox = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	width: 80px;
	height: 48px;
	padding: 0 16px;
	border-radius: 10px;
	margin-left: 24px;
	border: 1px solid #DDDDDD;
	font-weight: 600;
	font-size: 12px;
	background-color: inherit;
`

const Filter = () => {

	return (
		<FilterWrap>
			<FilterBox>
				<FilterSvg />
				필터
			</FilterBox>
		</FilterWrap>
	);
};

export default Filter;