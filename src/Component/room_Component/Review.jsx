import styled, {css} from "styled-components";
import expl from "../dummy";
import { SubTitle, BigBtn } from "./util";
import { StarSvg } from "../svg";
import { average } from "../dummy";

const ReviewRateCon = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	flex-wrap: wrap;
	margin-bottom: 24px;
`
const ReviewRateBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 50%;
	padding: 0 8px;
	margin-bottom: 16px;
	box-sizing: border-box;
`
const ReviewRate = styled.div`
	float: left;
	height: 4px;
	background-color: black;
	border-radius: 2px;
	width: ${props => props.rate ? props.rate : 'auto'};
`
let ReviewRateList = [];
Object.keys(average).forEach((key) => {
	if (key != "total") {
		ReviewRateList.push(
			<ReviewRateBox key={key}>
				<div>
					{key}
				</div>
				<div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginRight: "15%" }}>
					<div style={{ backgroundColor: "#DDDDDD", borderRadius: "2px", marginRight: "4px", width: "100px" }}>
						<ReviewRate rate={(average[key] * 20 / expl.review_list.length).toFixed(1) + "%"} />
					</div>
					<div style={{ fontSize: "12px", fontWeight: "600" }}>
						{(average[key] / expl.review_list.length).toFixed(1)}
					</div>
				</div>
			</ReviewRateBox>
		)
	}
});
const ReviewTextCon = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	flex-wrap: wrap;
`
const ReviewTextText = styled.div`
	white-space: pre-wrap;
	word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
	line-height: 24px;
`

const ReviewTextList = expl.review_list.slice(0, 6).map((review) => (
	<div key={review.name} style={{ width: "50%", marginBottom: "40px", boxSizing: "border-box" }}>
		<div style={{ display: "flex", flexDirection: "row", marginBottom: "16px" }}>
			<div style={{ width: "40px", height: "40px" }}>
				<img src={review.icon} alt="img1" style={{ width: "100%", height: "100%" }} />
			</div>
			<div style={{ display: "flex", flexDirection: "column", marginLeft: "12px" }}>
				<div style={{ fontWeight: "600", lineHeight: "20px" }}>
					{review.name}
				</div>
				<div style={{ fontSize: "14px", lineHeight: "20px", color: "#717171" }}>
					{review.date}
				</div>
			</div>
		</div>
		<ReviewTextText>
			{review.text}
		</ReviewTextText>
	</div>
));

const Review = () => {
	
	return (
		<div style={{padding: "0 80px"}}>
			<div style={{padding: " 48px 0", borderBottom: "1px solid #DDDDDD"}}>
				<SubTitle>
					<div style={{display: "flex", flexDirection: "row", alignItems: "center", marginBottom: "32px"}}>
						<div style={{marginRight: "8px"}}><StarSvg /></div>
						{average.total.toFixed(2)} · 후기 {expl.review_list.length}개
					</div>
				</SubTitle>
				<ReviewRateCon>
					{ReviewRateList}
				</ReviewRateCon>
				<ReviewTextCon>
					{ReviewTextList}
				</ReviewTextCon>
				<BigBtn>
					후기 {expl.review_list.length}개 모두 보기
				</BigBtn>
			</div>
		</div>
	);
};

export default Review;