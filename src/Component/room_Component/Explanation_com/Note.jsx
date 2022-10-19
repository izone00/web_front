import styled, {css} from "styled-components";
import { NoteSvg } from "../../svg";

import expl from "../../dummy";

const NoteBox = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 24px;
`
const NoteShort = styled.div`
	font-weight: 600;
	color: rgb(34, 34, 34);
	margin-bottom: 4px;
`
const NoteText = styled.div`
	word-break: keep-all;
	font-size: 14px;
	color : rgb(113, 113, 113);
`

const NoteList = expl.note_list.map(note => (
	<NoteBox>
		<div><NoteSvg icon={note.icon}/></div>
		<div style={{display: "flex", flexDirection: "column", marginLeft: "16px"}}>
			<NoteShort>
				{note.short}
			</NoteShort>
			<NoteText>
				{note.text}
			</NoteText>
		</div>
	</NoteBox>
));

const Note = () => {
	
	return (
		<div style={{display: "flex", flexDirection: "column", padding: "32px 0", borderBottom: "1px solid #DDDDDD"}}>
			{NoteList}
		</div>
	);
};

export default Note;