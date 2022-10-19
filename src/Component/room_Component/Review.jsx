import styled, {css} from "styled-components";
import expl from "../dummy";
import { SubTitle } from "../util";
import { StarSvg } from "../svg";

const Review = () => {
	
	let average = {
		clean : 0,
		precision : 0,
		comunication : 0,
		location : 0,
		ckeckin : 0,
		price : 0,
		total : 0,
	};
	expl.review_list.map(re => (
		average.clean += re.clean,
		average.precision += re.precision,
		average.comunication += re.comunication,
		average.location += re.location,
		average.checkin += re.checkin,
		average.price += re.price
	));
	average.total += average.clean + average.precision + average.comunication;
	average.total /= 6;
	return (
		<div style={{padding: "0 80px"}}>
			<div style={{padding: " 48px 0", borderBottom: "1px solid #DDDDDD"}}>
				<SubTitle>
					<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
						<div style={{marginRight: "8px"}}><StarSvg /></div>
						{average.total} · 후기 {expl.review_list.length}개
					</div>
				</SubTitle>
				
			</div>
		</div>
	);
};

export default Review;