import styled, {css} from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RightSvg, LeftSvg } from "../Nav_Com/NavSvg";
import { ContentList } from "./contentList";

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
	opacity: 0;
	
	${props =>
		props.show ?
		css`
			transition: 0.2s ease;
			opacity: 0.9;
			&:hover {
				transform: scale(1);
				opacity: 1;
				box-shadow: 0 0 32px rgba(0, 0, 0, 0.1);
			}
		` :
		css`
			pointer-events: none;
		`}
`
const ContentTextGrid = styled.div`
	display: grid;
	grid-template-rows: 19px 19px 19px 25px;
	grid-template-columns: auto 50px;
	gap: 2px 8px;
	font-size: 15px;
`
const ContentTextBold = styled.div`
	grid-column: 1 / 3;
	font-weight: 600;
	color: #222222;
`
const ContentTextGrey = styled.div`
	grid-column: 1 / 3;
	color: #717171;
`
const ContentTextPrice = styled.div`
	grid-column: 1 / 3;
	color: #222222;
`
const HomeContent = () => {
	
	const [imgNum, setImgNum] = useState(0);
	const [showBtn, setShowBtn] = useState(false);

	const ContentImgList = ContentList.map((img_src, idx) => <ContentImg key={idx} num={idx - imgNum} src={img_src} alt="" />)
	
	return (
		<HomeContentWrap
			onMouseOver={() => setShowBtn(true)}
			onMouseOut={() => setShowBtn(false)}
		>
			<Link to="./rooms" style={{ textDecoration: "none" }}>
				<HomeContentImgWrap>
					{ContentImgList}
					<ContentImgOptWrap>
						<ContentHeartWrap>
							
						</ContentHeartWrap>
						<ContentBtnWrap>
							<ContentImgBtn show={showBtn && (imgNum > 0)} onClick={(e) => { e.preventDefault(); setImgNum(imgNum - 1); }}>
								<LeftSvg />
							</ContentImgBtn>
							<ContentImgBtn show={showBtn && (imgNum < ContentList.length - 1)} onClick={(e) => { e.preventDefault(); setImgNum(imgNum + 1); }}>
								<RightSvg />
							</ContentImgBtn>
						</ContentBtnWrap>
						<ContentBarWrap>
							<div></div>
						</ContentBarWrap>
					</ContentImgOptWrap>
				</HomeContentImgWrap>
				<ContentTextGrid>
					<ContentTextBold>탈랑,태국</ContentTextBold>
					<ContentTextGrey>디자인:Jean-Michel Gathy</ContentTextGrey>
					<ContentTextGrey>11월 6일~11일</ContentTextGrey>
					<ContentTextPrice><b>\6,417,466</b> /박</ContentTextPrice>
				</ContentTextGrid>
			</Link>
		</HomeContentWrap>
	);
};

const HomeMain = () => {	

	let contentList = [];
	for (let i = 0; i < 12; i++)
		contentList.push(<HomeContent key={i}/>);
	return (
		<HomeMainGrid>
			{contentList}
		</HomeMainGrid>
	);
};

export default HomeMain;