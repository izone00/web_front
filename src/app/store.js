import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/booking/bookingSlice"
export default configureStore({
	reducer: {
		// counter: counterReducer,
		booking: bookingReducer,
	}
});