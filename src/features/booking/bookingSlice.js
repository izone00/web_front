import { createSlice } from "@reduxjs/toolkit";
import monList from "../../Component/room_Component/Explanation_com/Calendar_Com/monthList";

export const bookingSlice = createSlice({
	name: "booking",
	initialState: {
		checkin: "",
		checkout: "",
		hoverDate: "",
		calendar: [
			{...monList[0]},
			{...monList[1]}
		]
	},
	reducers: {
		updateCheckin: (state, action) => {
			state.checkin = action.payload;
		},
		updateCheckout: (state, action) => {
			state.checkout = action.payload;
		},
		nextCalendar: (state, action) => {

		},
		prevCalendar: (state, action) => {

		},
		clearDate: state => {
			state.checkin = "";
			state.checkout = "";
		}
	}
});

export const { updateCheckin, updateCheckout, clearDate} = bookingSlice.actions;

export default bookingSlice.reducer;