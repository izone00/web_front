import styled, {css} from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RightSvg, LeftSvg } from "../Nav_Com/NavSvg";

const HomeMainGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 40px 24px;
	margin-top: 24px;
	width: 100%;
	box-sizing: border-box;
	/* position: relative; */
	top: 178px;
	padding: 0 80px;
`
const HomeContentWrap = styled.div`
	
`
const HomeContentImgWrap = styled.div`
	position: relative;
	margin-bottom: 12px;
	background-color: skyblue;
	overflow: hidden;

	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`
const ContentImg = styled.img`
	position: absolute;
	left: ${props => props.num*100}%;
	border-radius: 5%;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 1;
	display: "inline-block";
	transition: 0.5s ease;
`
const ContentImgOptWrap = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	padding: 12px 12px 0 12px;
	z-index: 2;
`
const ContentHeartWrap = styled.div`
	width: 100%;
	height: 100%;
	z-index: 3;
`
const ContentBtnWrap = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
	z-index: 3;
`
const ContentBarWrap = styled.div`
	width: 100%;
	height: 100%;
	z-index: 3;
`
const ContentImgBtn = styled.button`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	border-radius: 32px;
	border-style: none;
	z-index: 3;
	transform: scale(0.95);
	opacity: 0.9;

	&:hover {
		transform: scale(1);
		opacity: 1;
		box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
	}
	transition: 0.2s ease;
`

const HomeContent = () => {
	
	const [imgNum, setImgNum] = useState(0);
	
	return (
		
		<HomeContentWrap>
			<Link to="./rooms" style={{ textDecoration: "none" }}>
				<HomeContentImgWrap>
					<ContentImg num={0 - imgNum} src="https://a0.muscache.com/im/pictures/miso/Hosting-45760329/original/c2153623-4ce3-4fcb-a099-b7a99b31b148.jpeg?im_w=720" alt=""></ContentImg>
					<ContentImg num={1 - imgNum} src="https://a0.muscache.com/im/pictures/a7de733b-47fd-4dcc-954f-5a79f8525134.jpg?im_w=720" alt=""></ContentImg>
					<ContentImgOptWrap>
						<ContentHeartWrap>
							1
						</ContentHeartWrap>
						<ContentBtnWrap>
							<ContentImgBtn onClick={(e) => { e.preventDefault(); setImgNum(imgNum - 1); }}>
								<LeftSvg />
							</ContentImgBtn>
							<ContentImgBtn onClick={(e) => { e.preventDefault(); setImgNum(imgNum + 1); }}>
								<RightSvg />
							</ContentImgBtn>
						</ContentBtnWrap>
						<ContentBarWrap>
							<div></div>
						</ContentBarWrap>
					</ContentImgOptWrap>
				</HomeContentImgWrap>
				<div class="content_text">
					<div class="text_item text_contry">탈랑,태국</div>
					<div class="text_item text_info">
						특이
					</div>
					<div class="text_item text_author">디자인:Jean-Michel Gathy</div>
					<div class="text_item text_date">11월 6일~11일</div>
					<div class="text_item text_price"><span class="text_price_num">\6,417,466</span> /박</div>
				</div>
			</Link>
		</HomeContentWrap>
	);
};

const HomeMain = () => {	

	let contentList = [];
	for (let i = 0; i < 10; i++) {
		contentList.push(<HomeContent />);
	}
	return (
		<HomeMainGrid>
			{contentList}
		</HomeMainGrid>
	);
};

export default HomeMain;