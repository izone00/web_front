import styled, {css} from "styled-components";
import expl from "../dummy";
import { SubTitle, MoreBtn } from "../util";




const Host = () => {
	
	return (
		<div style={{padding: "0 80px"}}>
			<div style={{padding: "48px 0", borderBottom: "1px solid #DDDDDD"}}>
				<div>
					<SubTitle>
						호스트: {expl.host}님
					</SubTitle>
				</div>
			</div>
		</div>
	);
};

export default Host;