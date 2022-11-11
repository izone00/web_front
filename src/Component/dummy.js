
const expl = {
	host: "Jeong Im",
	title : "별이 보이는 감성충만 프라이빗 복층 Cosmos Room",
	location : "Gimsatgat-myeon, Yeongweol, 강원도, 한국",
	loca_text : "",
	short : "Jeong Im 님이 호스팅하는 게스트용 별채 전체",
	option : "최대 인원 · 2명침실 · 1개침대 · 1개 · 욕실 1개",
	img_src : "https://a0.muscache.com/im/users/32099522/profile_pic/1430206316/original.jpg?im_w=240",
	sign_date : "2015년 4월",
	host_text : "",
	host_to_geust : "",
	note_list : [],
	aircover : {
		img : "https://a0.muscache.com/im/pictures/51a7f002-b223-4e05-a2af-0d4838411d92.jpg",
		text : "모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은 경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이 포함됩니다."
	},
	detail_text : "",
	fac : [],
	min_day : 1,
	review_list : [],
};
class review_rate {
	constructor (clean, precision, comunication, location, checkin, price) {
		this.clean = clean;
		this.precision = precision;
		this.comunication = comunication;
		this.location = location;
		this.checkin = checkin;
		this.price = price;
	};
};
class review_form {
	constructor(icon, name, date, text, rate){
		this.icon = icon;
		this.name = name;
		this.date = date;
		this.text = text;
		this.rate = rate;
	};
};

expl.review_list[0] = new review_form("https://a0.muscache.com/im/users/32750178/profile_pic/1437221687/original.jpg?im_w=240", "Taeyoung", "2022년 10월", "text1", new review_rate(5,5,5,5,5,5));
expl.review_list[0].text = `행복했습니다:)
늦은시간에 도착했는데 친절하게 맞아주시고,
숙소는 다른 후기들처럼 정말 깨끗하고 예뻤습니다.
특히 다락방에서 보이는 하늘이 너무 예뻐 힐링 가득했네요
귀여운 고양이와 토끼가 있어 너무 행복했어요.
명소나 맛집도 친절히 알려주시고,
다음에 올 손님들을 위해 불멍용 화로도 준비하고계시더라고요:)
저녁에 달아주신 해먹, 예쁘고 잘 관리된 정원, 친절하신 호스트 부부분들 덕분에 좋은 추억으로 오래오래 기억될 것 같네요.
무조건 또 방문할 예정입니다! 강추!!!`
expl.review_list[1] = new review_form("", "Hyekyun", "2022년 10월", "text2", new review_rate(4,5,3,2,5,1));
expl.review_list[2] = expl.review_list[0];
expl.review_list[3] = expl.review_list[0];
expl.review_list[4] = expl.review_list[0];
expl.review_list[5] = expl.review_list[1];
// console.log(expl.review_list);

expl.fac[0] = {
	icon : "M16 1a5 5 0 0 1 5 5 5 5 0 0 1 0 10 5.002 5.002 0 0 1-4 4.9v4.287C18.652 23.224 21.153 22 23.95 22a8.94 8.94 0 0 1 3.737.814l.313.15.002 2.328A6.963 6.963 0 0 0 23.95 24c-3.542 0-6.453 2.489-6.93 5.869l-.02.15-.006.098a1 1 0 0 1-.876.876L16 31a1 1 0 0 1-.974-.77l-.02-.124C14.635 26.623 11.615 24 7.972 24a6.963 6.963 0 0 0-3.97 1.234l.002-2.314c1.218-.6 2.57-.92 3.968-.92 2.818 0 5.358 1.24 7.028 3.224V20.9a5.002 5.002 0 0 1-3.995-4.683L11 16l-.217-.005a5 5 0 0 1 0-9.99L11 6l.005-.217A5 5 0 0 1 16 1zm2.864 14.1c-.811.567-1.799.9-2.864.9s-2.053-.333-2.864-.9l-.062.232a3 3 0 1 0 5.851.001zM11 8a3 3 0 1 0 .667 5.926l.234-.062A4.977 4.977 0 0 1 11 11c0-1.065.333-2.053.9-2.864l-.232-.062A3.013 3.013 0 0 0 11 8zm10 0c-.228 0-.45.025-.667.074l-.234.062C20.667 8.947 21 9.935 21 11a4.977 4.977 0 0 1-.9 2.864l.232.062A3 3 0 1 0 21 8zm-5 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-5a3 3 0 0 0-2.926 3.667l.062.234C13.947 6.333 14.935 6 16 6s2.053.333 2.864.9l.062-.232A3 3 0 0 0 16 3z" ,
	text : "정원 전망",
}
expl.fac[1] = {
	icon : "M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
	text : "산 전망",
}
expl.fac[2] = {
	icon : "M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
	text : "호수나 강과 인접",
}
expl.fac[3] = {
	icon : "M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
	text : "주방",
}
expl.fac[4] = {
	icon : "M28 2a2 2 0 0 1 1.995 1.85L30 4v24a2 2 0 0 1-1.85 1.995L28 30H4a2 2 0 0 1-1.995-1.85L2 28V4a2 2 0 0 1 1.85-1.995L4 2zm-5.92 19.995L22 22H10l-.08-.005L4 27.916V28h24v-.085zM28 4H4v21.084l12-11.998 12 12zM16 15.915L11.915 20h8.17zM22 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
	text : "무선 인터넷",
}
expl.note_list[0] = {
	icon : "M26 2a1 1 0 0 1 .922.612l.04.113 2 7a1 1 0 0 1-.847 1.269L28 11h-3v5h6v2h-2v13h-2l.001-2.536a3.976 3.976 0 0 1-1.73.527L25 29H7a3.982 3.982 0 0 1-2-.535V31H3V18H1v-2h5v-4a1 1 0 0 1 .883-.993L7 11h.238L6.086 8.406l1.828-.812L9.427 11H12a1 1 0 0 1 .993.883L13 12v4h10v-5h-3a1 1 0 0 1-.987-1.162l.025-.113 2-7a1 1 0 0 1 .842-.718L22 2h4zm1 16H5v7a2 2 0 0 0 1.697 1.977l.154.018L7 27h18a2 2 0 0 0 1.995-1.85L27 25v-7zm-16-5H8v3h3v-3zm14.245-9h-2.491l-1.429 5h5.349l-1.429-5z",
	short : "업무 전용 공간",
	text : "와이파이를 갖추고 업무에 적합한 공용 공간입니다.",
}
expl.note_list[1] = {
	icon : "m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z",
	short : "Jeong Im님은 슈퍼호스트입니다",
	text : "슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가 숙소에서 편안히 머무를 수 있도록 최선을 다하는 호스트입니다."
}
expl.note_list[2] = {
	icon : "m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z",
	short : "11월 4일 전까지 무료로 취소하실 수 있습니다.",
	text : ""
}
expl.detail_text = `영월의 스테이하우스는 커플이 프라이빗하게 쉬기 좋은 객실입니다.
복층 구조로 되어있어 2층에 올라가면, 아늑하고 따뜻한 느낌의 객실에서 편안하게 즐기실 수 있습니다.
창밖으로 들리는 계곡물소리와 지저귀는 새소리 그리고 맑은 공기는 도시에서 지친 마음에 휴식을 주며 매일 청결하게 관리하는 침구는 편안한 잠자리를 제공합니다.
김삿갓계곡의 외씨버선길과 가깝고 숙소 바로 앞에는 아름다운 계곡이 흐르고 있습니다.
객실에서는 Marshall 스피커로 감미로운 음악과 함께 빔 프로젝터로 보다 실감나고 편하게 영화를 감상하실 수 있으며, 해질녘에는 아름다운 정원의 해먹에 누워 자연속에서 재충전의 시간을 가져보세요~
+ 예약가능인원: 성인 2명 (영월 스테이하우스는 노키즈존으로 운영됩니다.)
숙소
매일매일 침구를 세탁하여 항상 청결함을 유지하고 있습니다.^^
객실 내에서 Marshall 스피커로 음악을 즐기실 수 있으며, 무료 Wifi를 사용하실 수 있습니다. 미니빔 프로젝터 뿐만 아니라 Olleh TV로 다양한 채널을 시청하실 수 있습니다.

+ 크롬캐스트가 준비되어 있습니다. 넷플릭스, 왓챠 회원이신 분들은 객실에서 빔 프로젝트로 시청 가능하세요. 유튜브도 시청 가능하니 필요하신 분은 미리 말씀주세요~
게스트 이용 가능 공간/시설
42 LED TV, Olleh TV, 크롬캐스트(Chromecast), Marshall 스피커, Q size 침대, LG 미니빔 프로젝터, 냉장고, 에어컨, 전자레인지, 무선주전자, 헤어드라이어, 주방용품일체, 샴푸/바디/컨디셔너, Wi-Fi
1층은 주방과 거실로 이루어져 있고 2층은 하늘을 볼 수 있는 침실이 있습니다~
기타 주의사항
1) 소중한 이와의 추억을 위해 퇴실시에 폴라로이드 기념사진을 찍어드리고 있습니다.

2)별도의 바베큐장에서 바베큐도 가능하며 사전에(1시간 전) 미리 말씀주시면 됩니다.

3)밖에서 고양이 나비, 대심이, 소심이 그리고 토끼 꺼멍이를 키우고 있습니다.

4)날씨 좋은 날 정원의 해먹과 흔들그네에서 편안히 쉴 수 있습니다. 정원의 의자나 해먹에서 쏟아질듯한 밤하늘의 반짝이는 별들을 구경해보세요~`

expl.loca_text = `김삿갓계곡은 아름다운 기암절벽과 깨끗한 수질로 유명하며 주변에는 여러 야생화와 맑은 공기를 만들어주는 나무들이 있습니다.
숙소 주변에는 외씨버선길과 같은 아름다운 산책로가 있습니다.^^
하이원 워터월드, 단양 패러글라이딩, 정선 레일바이크, 민둥산 억새축제, 제천 리솜 포레스트 스파 등을 30~40분정도 거리에서 모두 즐기실 수 있습니다.`
expl.host_text = `안녕하세요. 게스트님!

저희 부부는 퇴직 후 자연을 좋아하여 이곳 영월 김삿갓 계곡에 집을 짓고 살게 되었습니다.
다른 분들도 사계절이 아름다운 김삿갓 계곡을 즐겼으면 하는 마음에, 누구나 자연 속에서 편히 쉬고 재충전 할 수 있는 스테이 하우스를 짓게 되었습니다.

저희 집은 영월에서 쉽게 찾을 수 없는 커플 펜션으로 부부 또는 연인과 함께 오시면 공간을 프라이빗하고 편하게 사용하실 수 있습니다.^^
저희는 늘 정원의 예쁜 꽃들과 나무들을 가꾸며 일상을 분주하게 보내고 있어요.
아름다운 자연 속에서 편히 쉬기 위해 영월을 찾았다가, 지금은 오히려 일이 늘었지만 게스트분들과 소통하며 행복하게 지내고 있습니다~^^

집을 처음 짓고 바로 에어비앤비를 통해 소개하게 되어 진심으로 기쁘고,
앞으로도 더욱 많은 분들께 행복한 시간을 선물해드리도록 언제나 노력하겠습니다!

저희는 다양한 게스트 분들과의 만남을 좋아합니다.
어디에서 오시든 저희 집을 편안하게 이용하셨으면 좋겠어요!
문의사항 있으시면 언제든 연락주세요. ^^

감사합니다.

스테이하우스 호스트 올림`
expl.host_to_geust = `저희 스테이 하우스를 찾아주시는 에어비앤비 게스트 분들이 편안한 시간을 보내실 수 있도록 하겠습니다.^^
`
let average = {
	clean : 0,
	precision : 0,
	comunication : 0,
	location : 0,
	checkin : 0,
	price : 0,
	total : 0,
};
expl.review_list.map(re => (
	Object.keys(re.rate).forEach((key) => {
		if (key != "icon")
			average[key] += re.rate[key];
	})
));
average.total += average.clean + average.precision + average.comunication + average.location + average.checkin + average.price;
average.total /= (6*expl.review_list.length);



export default expl;
export {average};