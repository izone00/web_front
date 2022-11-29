import { createSlice } from "@reduxjs/toolkit";
import { bookList } from "../../Component/room_Component/Explanation_com/Calendar_Com/book";

const dateCmp = (date1, date2) => {
	const spl1 = date1.split('.');
	const spl2 = date2.split('.');

	console.log(spl1, spl2);
	for (let i = 0; i < 3; i++) {
		if (Number(spl1[i]) < Number(spl2[i]))
			return (true);
		else if (Number(spl1[i]) > Number(spl2[i]))
			return (false);
	}
	return (false);
}

export const bookingSlice = createSlice({
	name: "booking",
	initialState: {
		checkinDate: "",
		checkoutDate: "",
		availableMaxDate: "9999.99.99",
	},
	reducers: {
		updateCheckin: (state, action) => {
			state.checkinDate = action.payload;
			state.availableMaxDate = bookList.find( book => dateCmp(action.payload, book.checkin)).checkin;
		},
		updateCheckout: (state, action) => {
			state.checkoutDate = action.payload;
		},
		clearDate: state => {
			state.checkinDate = "";
			state.checkoutDate = "";
			state.availableMaxDate = "9999.99.99";
		}
	}
});

export const { updateCheckin, updateCheckout, clearDate} = bookingSlice.actions;
export { dateCmp };
export default bookingSlice.reducer;