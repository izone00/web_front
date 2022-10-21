import styled, {css} from "styled-components";
import { SubTitle } from "../util";
import expl from "../dummy";
import Calendar from "./Calendar";

const Checkin = () => {

	return (
		<div style={{padding: "48px 0"}}>
			<SubTitle>체크아웃 날짜를 선택하세요</SubTitle>
			<div style={{paddingTop: "8px", fontSize: "14px" , color: "#717171"}}>
				최소 숙박 일수: {expl.min_day}박
			</div>
			<div style={{fontSize: "200px", textAlign: "center"}}>
				캘린더
				<div style={{width: "50%", backgroundColor: "red"}}>
					<Calendar />
				</div>
			</div>
		</div>
	);
};

export default Checkin;