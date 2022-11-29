import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bookingReducer from "../features/booking/bookingSlice"

export default configureStore({
	reducer: {
		// counter: counterReducer,
		booking: bookingReducer
	}
});