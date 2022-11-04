
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
	constructor(startday, month, year, dayList){
		this.startday = startday;
		this.month = month;
		this.year = year;
		this.dayList = dayList;
	};
};

const makeDayList = (startday, month) => {
	let daylist = [];

	daylist[0] = [];
	for (let d = 0, w = 0; true; d++) {
		if ((d >= startday) && (d + 1 - startday <= monthLen[month]))
			daylist[w][d % 7] = (d + 1 - startday);
		else
			daylist[w][d % 7] = "";
		if (d % 7 == 6) {
			if (daylist[w][d % 7] === "")
				break;
			w += 1;
			daylist[w] = [];
		}
	}
	return (daylist);
}

let monList = [];
let startday = (today.week - (today.day - 1)) % 7;
if (startday < 0)
	startday += 7;
let month = today.month;
let year = today.year;
monList[0] = new monthForm(
	startday,
	month,
	year,
	makeDayList(startday, today.month)
);


for (let i = 1 ; i < 12; i++) {
	startday = monList[i-1].dayList.at(-1).findIndex(day => day === "");
	month += 1;
	if (month === 13) {
		month = 1;
		year += 1;
	}
	monList[i] = new monthForm(
		startday,
		month,
		year,
		makeDayList(startday, month)
		);
}

console.log(monList);

export default monList;