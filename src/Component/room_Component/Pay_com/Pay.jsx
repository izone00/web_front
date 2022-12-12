import styled from "styled-components";
import { useSelector } from "react-redux";
import { PayTitle } from "./PayTitle";
import { PayOk } from "./PayOk";
import { PayOpt } from "./PayOpt";
import { PayBill } from "./PayBill";
const PayCon = styled.div`
	position: sticky;
	float: right;
	top: 48px;
	width: 70%;
	border-radius: 12px;
	margin: 48px 0;
	padding: 24px;
	box-shadow: 0px 0px 8px #B0B0B0;
`

const Pay = () => {

	const booking = useSelector(state => state.booking);

	return (
		<PayCon>
			<PayTitle />
			<PayOpt />
			<PayOk />
			{booking.checkoutDate && <PayBill />}
		</PayCon>
	);
};

export { Pay };