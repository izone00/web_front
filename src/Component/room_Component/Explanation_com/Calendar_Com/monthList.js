import { bookList } from "./book";
const week = ["일", "월", "화", "수" , "목", "금", "토"];
const monthLen = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let now = new Date();
let today = {
	year : now.getFullYear(),
	month : now.getMonth() + 1,
	day : now.getDate(),
	week : now.getDay(),
};

class monthForm {
	constructor(year, month, dayTable){
		this.year = year;
		this.month = month;
		this.dayTable = dayTable;
	};
};

const datecmp = (date1, date2) => {
	const spl1 = date1.split('.');
	const spl2 = date2.split('.');
	for (let i = 0; i < 3; i++) {
		if ((Number)(spl1[i]) < (Number)(spl2[i]))
			return (true);
		else if ((Number)(spl1[i]) > (Number)(spl2[i]))
			return (false);
	}
	return (true);
}

const isBooked = (date) => {
	return bookList.some(({ checkin, checkout }) =>
		(datecmp(checkin, date) && datecmp(date, checkout))
	);
}

const makeDayTable = (startday, month, year) => {
	let dayTable = [];
	dayTable[0] = [];
	for (let d = 0, w = 0; true; d++) {
		if ((d >= startday) && (d + 1 - startday <= monthLen[month]))
			dayTable[w][d % 7] = {
				date: `${year}.${month}.${d + 1 - startday}`,
				booked: isBooked(`${year}.${month}.${d + 1 - startday}`)
			};
		else
			dayTable[w][d % 7] = {date: "", booked: true};
		if (d % 7 == 6) {
			if (dayTable[w][d % 7].date === "")
				break;
			w += 1;
			dayTable[w] = [];
		}
	}
	return (dayTable);
}

let monList = [];
let startday = (today.week - (today.day - 1)) % 7;
if (startday < 0)
	startday += 7;
let month = today.month;
let year = today.year;
monList[0] = new monthForm(
	year,
	month,
	makeDayTable(startday, today.month, today.year)
);

for (let i = 1; i < 12; i++) {
	startday = monList[i - 1].dayTable.at(-1).findIndex(day => day.date === "");
	month += 1;
	if (month === 13) {
		month = 1;
		year += 1;
	}
	monList[i] = new monthForm(
		year,
		month,
		makeDayTable(startday, month, year)
	);
}

console.log(monList);
export { monList };