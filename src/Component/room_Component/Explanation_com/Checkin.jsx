import styled, {css} from "styled-components";
import { SubTitle } from "../util";
import expl from "../../dummy";
import Calendar from "./Calendar_Com/Calendar";

const Checkin = () => {

	return (
		<div style={{width: "100%", padding: "48px 0"}}>
			<SubTitle>체크아웃 날짜를 선택하세요</SubTitle>
			<div style={{paddingTop: "8px", fontSize: "14px" , color: "#717171"}}>
				{expl.min_day > 1 ? "최소 숙박 일수: " + expl.min_day + "박" : "여행 날짜를 입력하여 정확한 요금을 확인하세요."}
			</div>
			<div style={{width: "100%"}}>
				<Calendar />
			</div>
		</div>
	);
};
export default Checkin;