import styled, {css} from "styled-components";
import expl from "../../dummy";
import { MoreBtn } from "../util";
import { ArrowSvg } from "../../svg";

const DetailText = styled.div`
	width: 100%;
	white-space: pre-wrap;
	word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
	line-height: 24px;
`


const Detail = () => {
	let detail_short = "hello";

	return (
		<div style={{padding: "32px 0", borderBottom: "1px solid #DDDDDD"}}>
			<DetailText>
				{expl.detail_text}
			</DetailText>
			<div style={{marginTop: "16px"}}>
				<MoreBtn>
					<div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
						더 보기
						<div style={{marginLeft: "4px"}}>
							<ArrowSvg />
						</div>
					</div>
				</MoreBtn>
			</div>
		</div>
	);
};

export default Detail;