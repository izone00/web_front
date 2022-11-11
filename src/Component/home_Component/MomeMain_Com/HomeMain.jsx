import styled, {css} from "styled-components";

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
	/* width: 100%; */
	margin-bottom: 12px;
	background-color: skyblue;

	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`
const ContentImg = styled.img`
	position: absolute;
	border-radius: 5%;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 1;
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
const ContenImgBtn = styled.button`
	height: 20px;
	z-index: 3;
`
const HomeMain = () => {

	// <img src="https://a0.muscache.com/im/pictures/miso/Hosting-45760329/original/c2153623-4ce3-4fcb-a099-b7a99b31b148.jpeg?im_w=720" alt=""></img>
	return (
		<HomeMainGrid>
			<HomeContentWrap>
				<HomeContentImgWrap>
					<ContentImg className="content_img" src="https://a0.muscache.com/im/pictures/miso/Hosting-45760329/original/c2153623-4ce3-4fcb-a099-b7a99b31b148.jpeg?im_w=720" alt=""></ContentImg>
					<ContentImgOptWrap>
						<ContentHeartWrap>
							1
						</ContentHeartWrap>
						<ContentBtnWrap>
							<ContenImgBtn>다음</ContenImgBtn>
							<ContenImgBtn>이전</ContenImgBtn>
						</ContentBtnWrap>
						<ContentBarWrap>
							점점점
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
			</HomeContentWrap>
		</HomeMainGrid>
	);
};

export default HomeMain;