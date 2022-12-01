import styled from "styled-components";
import { PayTitle } from "./PayTitle";
import { PayOk } from "./PayOk";
import { PayOpt } from "./PayOpt";
const PayCon = styled.div`
	position: sticky;
	float: right;
	top: 48px;
	width: 70%;
	border: 1px solid #DDDDDD;
	border-radius: 12px;
	margin: 48px 0;
	padding: 24px;
`

const Pay = () => {

	return (
		<PayCon>
			<PayTitle />
			<PayOpt />
			<PayOk />
		</PayCon>
	);
};

export { Pay };