import { SearchSvg } from "./svg";
import React, {useState} from "react"
import styled, {css} from "styled-components"

const SearchBar = styled.section`
	display: flex;
	align-items: center;
	height: 48px;
	box-sizing: border-box;
	border-radius: 48px;
	border: 1px solid lightgray;
	box-shadow: 0 1px 6px #DDDDDD;
	transition: box-shadow 0.5s ease;
	&:hover {
		box-shadow: 0 2px 4px #b0b0b0;
	}
`
const SearchBtn = styled.button`
	height: inherit;
	cursor: pointer;
	font-size: 14px;
	background-color: inherit;
	border-style: none;

	${props => 
		props.keyword === "where" &&
		css`
			padding: 0 0 0 8px;
			font-weight: 600;
			color: rgb(34, 34, 34);
			border-top-left-radius: 48px;
			border-bottom-left-radius: 48px;
		`}
	${props => 
	props.keyword === "icon" &&
	css`
		padding: 0 8px 0 0;
		border-top-right-radius: 48px;
		border-bottom-right-radius: 48px;
	`}
`
const SearchStart = styled.div`
	box-sizing: border-box;
	width: 250px;
	padding: 0 16px;
	text-align: left;
`
const SearchWhere = styled.div`
	box-sizing: border-box;
	width: 98px;
`
const SearchWhen = styled.div`
	width: 120px;
	font-weight: 600;
	color: rgb(34, 34, 34);
`
const SearchWho = styled.div`
	color: gray;
	width: 105px;
`
const SearchLine = styled.span`
	height: 24px;
	width: 1px;
	background-color: lightgray;
`
const search = () => {


	return (
		<SearchBar>
			{/* <SearchBtn keyword="where"> 
				<SearchWhere>어디든지</SearchWhere>
			</SearchBtn>
			<SearchLine />
			<SearchBtn>
				<SearchWhen>언제든 일주일</SearchWhen>
			</SearchBtn>
			<SearchLine />
			<SearchBtn>
				<SearchWho>게스트 추가</SearchWho>
			</SearchBtn> */}
			<SearchBtn keyword={"where"}>
				<SearchStart>검색 시작하기</SearchStart>
			</SearchBtn>
			<SearchBtn keyword={"icon"}>
				<SearchSvg />
			</SearchBtn>
		</SearchBar>
	)
}

export default search;