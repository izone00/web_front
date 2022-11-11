import { useState } from "react";
import styled, {css} from "styled-components";
import { bookList } from "../../../book";
import { today } from "./monthList";

const CalWeek = styled.div`
	
`
const CaldayWrap = styled.td`
	position: relative;
	box-sizing: border-box;
	background-color: inherit;
	border: 1px solid white;
	padding: 0;
	&:after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}

	${props =>
		props.hover &&
		css`
			background-color: #F7F7F7;
			border-right-color: #F7F7F7;
			border-left-color: #F7F7F7;
		`}
`
const CalDayBtn = styled.button`
	cursor: pointer;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 50%;
	left: 0;
	transform: translate(0,-50%);
	border-style: none;
	font-weight: 600;
	background-color: inherit; 

	${props =>
		props.click &&
		css`
			color: white;
			background-color: #222222;
			border-radius: 50%;
		`}
		
	${props =>
		props.book && !props.click &&
		css`
			&:hover {
				background-color: white;
				border: 1px solid black;
				border-radius: 50%;
			}
		`}

	${props =>
		!props.book && 
		css`
			font-weight: 400;
			color: #B0B0B0;
			text-decoration: line-through;
		`}
`
const canBook = (date, checkin, max, checkout) => {
	if (date < today.year*10000 + today.month*100 + today.day)
		return (false);
	if (!checkout) {
		if (date < checkin)
			return (false);
		if (max && max < date)
			return (false); 
	}
	return (!bookList.find( book => (book.start <= date && date <= book.end) ))
};

const CalDayTable = (props) => {

	const selectDay = (date) => {
		if (!props.checkinDay || props.checkoutDay) {
			let maxDateBook = bookList.find( book => date < book.start )
			if (maxDateBook)
			props.setMaxdate(maxDateBook.start - 1);
			else
			props.setMaxdate(false);
			props.setCheckinDay(date);
			props.setCheckoutDay(false);
		}
		else {
			props.setCheckoutDay(date);
		}
		console.log("checkin", props.checkinDay);
		console.log("checkout", props.checkoutDay);
	}
	const hoverDay = (date) => {
		if (!props.checkoutDay && ( !props.maxDate || date <= props.maxDate )) {
			props.setHoverDate(date);
			// console.log(props.hoverDate);
		}
	}
	const hoverOutDay = () => {
		if (!props.checkoutDay)
			props.setHoverDate(false);
	}

	const CalDayMat = props.date.dayList.map((row) => {

		let CalDayRow = row.map((day) => {
			let connectDate = props.date.year*10000 + props.date.month*100 + Number(day);

			return (
				<CaldayWrap hover={ props.checkinDay && props.checkinDay < connectDate && connectDate < props.hoverDate } onMouseOver={() => {hoverDay(connectDate)}} onMouseOut={hoverOutDay}>
					<CalDayBtn disabled={!(day != "" && canBook(connectDate, props.checkinDay, props.maxDate, props.checkoutDay))} click={props.checkinDay === connectDate || props.checkoutDay === connectDate} book={day != "" && canBook(connectDate, props.checkinDay, props.maxDate, props.checkoutDay)} onClick={() => {selectDay(connectDate)}}>
						{day}
					</CalDayBtn>
				</CaldayWrap>
				)
	});
	
		return (
			<tr style={{ margin: "0 1px", position: "relative" }}>
				{CalDayRow}
			</tr>
		);
	});

	return (
		<table style={{borderSpacing: "0", width: "100%", fontSize: "14px", fontWeight: "600", lineHeight: "20px", }}>
			<tbody>
				{CalDayMat}
			</tbody>
		</table>
	)
}

export default CalDayTable;

