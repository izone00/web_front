const login = document.getElementById("login_scroll_container");
const login_btn = document.getElementById("login_menu");

login_btn.onclick = function() {
	if (login.style.visibility !== "visible")
		login.style.visibility = "visible";
	else
		login.style.visibility = "hidden";
}
login_btn.onblur = function() {
	login.style.visibility = "hidden";
}

const img1_link_lst = ["https://a0.muscache.com/im/pictures/7fde1672-2160-4593-90cd-00bd75da732a.jpg?im_w=720"
, "https://a0.muscache.com/im/pictures/04b555bd-2c93-4caf-95b1-749fdcace5a6.jpg?im_w=720"
, "https://a0.muscache.com/im/pictures/e5bb2717-c75a-46f0-a072-42db557efaf8.jpg?im_w=720"
, "https://a0.muscache.com/im/pictures/c7cf9c8c-47a0-440e-be17-7ce52a78f419.jpg?im_w=720"
, "https://a0.muscache.com/im/pictures/7224d487-cd77-47a5-a74f-a9e274386125.jpg?im_w=720"
, "https://a0.muscache.com/im/pictures/86c729db-403a-4ff9-b828-e61854ba37f7.jpg?im_w=720"
];

let imgNum = document.getElementById("main_content_img1");
let img_right_btn = document.getElementById("img_right_num1");
let	img_idx = 0;

img_right_btn.onclick = function() {
	if (img_idx + 1 < img1_link_lst.length)
	{
		img_idx++;
		imgNum.src = img1_link_lst[img_idx];
	}
};

const themeRightBtn = document.getElementById("theme_right_btn");
const themeLeftBtn = document.getElementById("theme_left_btn");
const navRight = document.getElementById("nav_right");
const navLeft = document.getElementById("nav_left");


themeRightBtn.onclick = function() {
	let id = null;
	let move = 0;
	clearInterval(id);
	id = setInterval(scrollFun, 1);
	function scrollFun() {
		move += 10;
		let scrollLeft = document.getElementById("theme_icon_container").scrollLeft;
		document.getElementById("theme_icon_container").scrollLeft += 10;
		if (scrollLeft === document.getElementById("theme_icon_container").scrollLeft)
			navRight.style.visibility = "hidden";
		if (move >= 500)
			clearInterval(id);
	}
	navLeft.style.visibility = "visible";
};
themeLeftBtn.onclick = function() {
	let id = null;
	let move = 0;
	clearInterval(id);
	id = setInterval(scrollFun, 1);
	function scrollFun() {
		move += 10;
		let scrollLeft = document.getElementById("theme_icon_container").scrollLeft;
		document.getElementById("theme_icon_container").scrollLeft -= 10;
		if (0 === document.getElementById("theme_icon_container").scrollLeft)
			navLeft.style.visibility = "hidden";
		if (move >= 500)
			clearInterval(id);
	}
	navRight.style.visibility = "visible";
};

const navCon = document.getElementById("nav_container");

document.addEventListener('scroll', function() {
	let top_px = "0";
	if (document.documentElement.scrollTop >= 20)
		top_px = "60";
	else
		top_px = String(80 - document.documentElement.scrollTop);
	navCon.style.top = top_px + "px";
	if (document.documentElement.scrollTop > 0)
		navCon.style.boxShadow = "0 0 10px #DDDDDD"
	else
		navCon.style.boxShadow = "none";
});

const headerCon = document.getElementById("header_container");
const searchBar = document.getElementById("search_bar");
const searchBox = document.getElementById("search_box");
const actiCon = document.getElementById("activity_container");
const headShadow = document.getElementById("header_shadow_box");

searchBar.onclick = function() {
	headShadow.style.height = "100%";
	searchBox.style.height = "66px";
	searchBar.style.height = "66px";
	actiCon.style.visibility = "visible";

	let id = null;
	let searchWidth = 365;
	let searPosTop = 0;
	let searPadding = 16;
	let headHeight = 80;
	let headPaddingBot = 0;
	clearInterval(id);
	id = setInterval(frame, 1);
	function frame() {
		if (searchWidth >= 850){
		{
			searchBar.style.width = "850px";
			searchBox.style.top = "80px";
			searchBox.style.padding = "0 7px";
			headerCon.style.height = "160px";
			headerCon.style.paddingBottom = "80px";
			clearInterval(id);
		}
		} else {
			let speed = 15;
			searchWidth += speed;
			searchBar.style.width = String(searchWidth) + "px";
			searPosTop += (80*speed / 485);
			searchBox.style.top = String(searPosTop) + "px";
			searPadding -= (16*speed / 485) 
			searchBox.style.padding = String(searPadding) + "px 7px";
			headHeight += (80*speed / 485);
			headerCon.style.height = String(headHeight) + "px";
			headPaddingBot += (80*speed / 485);
			headerCon.style.paddingBottom = String(headPaddingBot) + "px";
			speed -= 0.2;
		}
	}
}

headShadow.onclick = function () {
	
}