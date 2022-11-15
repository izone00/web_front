class thema_form {
	constructor (name, imgSrc, conList) {
		this.name = name;
		this.imgSrc = imgSrc;
		this.conList = conList;
	};
};

const themaList = [
new thema_form("최고의 전망", "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg", [
	{
		img: [
			"https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=1200",
			"https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/06e0c585-5d65-4f52-979e-04954a5ec3f2.jpeg?im_w=720",
			"https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/6c1ea154-56af-4c54-a485-48c903599c19.jpeg?im_w=720",
			"https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/cc83f38a-ab6c-4a07-8532-96a411eb0a7f.jpeg?im_w=720"
		],
		location: "Ganggu-myeon, Yeongdeok-gun, 경상북도, 한국",
		distance: 251,
		period: "11월 20일 ~25일",
		price: "265,000",
	}
]),
new thema_form("한적한 시골", "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"),
new thema_form("국립공원", "https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"),
new thema_form("Luxe", "https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"),
new thema_form("개인실", "https://a0.muscache.com/pictures/eb7ba4c0-ea38-4cbb-9db6-bdcc8baad585.jpg"),
new thema_form("해변 바로 앞", "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"),
new thema_form("료칸", "https://a0.muscache.com/pictures/827c5623-d182-474a-823c-db3894490896.jpg"),
new thema_form("기상청외한 숙소", "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"),
new thema_form("캠핑장", "https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"),
new thema_form("디자인", "https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"),
new thema_form("저택", "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"),
new thema_form("저택", "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"),
new thema_form("캐슬", "https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"),
new thema_form("통나무집", "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"),
new thema_form("초소형 주택", "https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"),
new thema_form("열대 지역", "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"),
new thema_form("스키", "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"),
]


console.log(themaList);
export {themaList};