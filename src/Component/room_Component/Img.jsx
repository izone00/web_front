import styled, {css} from "styled-components";
import img_arr from "./img_src";

const ImgWindow = styled.div`
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	border-radius: 15px;
	padding : 24px 80px 0 80px;
`

const BigImg = styled.button`
	flex: 2 2 20px;
	box-sizing: border-box;
	padding: 0;
	border-style: none;
	border-radius: 15px;
	cursor: pointer;
	height: 500px;
`
const SmallImgBox = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 10px;
	padding-left: 8px;
`
const ImgBtn = styled.button`
	padding: 0;
	border-style: none;
	background-color: inherit;
	cursor: pointer;
	height: 250px;
	${props =>
		props.pad === true &&
		css`
			padding-top : 8px;
		`}
	${props =>
		props.rad === "top" &&
		css`
			border-top-right-radius: 15px;
		`}
	${props =>
	props.rad === "bot" &&
	css`
		border-bottom-right-radius: 15px;
	`}
`
const Img = () => {

	return (
		<ImgWindow>
			<BigImg>
					<img style={{width: "100%", height: "100%", borderBottomLeftRadius: "15px", borderTopLeftRadius: "15px"}} src={img_arr[0]} alt="img2" />
			</BigImg>
			<SmallImgBox>
				<ImgBtn>
					<img style={{width: "100%",  height: "100%"}} src={img_arr[1]} alt="img2" />
				</ImgBtn>
				<ImgBtn pad={true}>
					<img style={{width: "100%", height: "100%"}} src={img_arr[2]} alt="img2" />
				</ImgBtn>
			</SmallImgBox>
			<SmallImgBox>
			<ImgBtn rad={"top"}>
					<img style={{width: "100%", height: "100%", borderTopRightRadius: "15px"}} src={img_arr[3]} alt="img2" />
			</ImgBtn>
			<ImgBtn pad={true} rad={"bot"}>
				<img style={{width: "100%", height: "100%", borderBottomRightRadius: "15px"}} src={img_arr[4]} alt="img2" />
			</ImgBtn>
			</SmallImgBox>
		</ImgWindow>
	);
};

export default Img;