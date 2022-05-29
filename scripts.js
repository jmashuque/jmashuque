// JavaScript Document

var source = [
	"images/1grimp_screenshot.png",
	"images/2sokoban_screenshot.png",
	"images/3canadabank_screenshot.png",
	"images/4addressbook_screenshot.png"
]
var alternate = [
	"<strong>GRIMP Image Editor</strong>",
	"<strong>Sokoban Game</strong>",
	"<strong>Canada Bank Website</strong>",
	"<strong>My Address Book Plus</strong>"
]
var caption = [
	alternate[0].concat("<br><strong>Simple Image Editor with features<br>Language: Python</strong><br><br>" +
						"&bull; Custom designed selection box functionWorks with many image formats including JPEG, PNG, BMP<br>" +
						"&bull; Programmed functions like crop, rotate, undo, redo, eye dropper<br>" +
						"&bull; Uses menus, scroll bars, file open box, prompts, status bar<br>" +
						"&bull; Algorithms for effects like auto contrast, blur, equalize, flip, invert, sharpen, smooth, emboss, contour, red eye reduction, greyscale"),
	alternate[1].concat("<br><strong>Puzzle game using JFrame and JPanels<br>Language: Java</strong><br><br>" +
						"&bull; Uses JFrame with menus, buttons, file open box<br>" +
						"&bull; Programmed all logic including checks for winning or losing<br>" +
						"&bull; Optimized using threading, key listeners, error catching<br>" +
						"&bull; Reads text files for level data, including files with multiple levels<br>" +
						"&bull; Timer, undo, redo, change level incorporated in interface<br>" +
						"&bull; Uses arraylist to hold level and player grid data"),
	alternate[2].concat("<br><strong>Website using Heroku and MongoDB <br>Languages: JavaScript, Node.js</strong><br><br>" +
						"&bull; Deployed on Heroku and database hosted on MongoDB<br>" +
						"&bull; Allows opening new account, deposits, withdrawals and balance checks<br>" +
						"&bull; Uses JSON files to store user and bank account information<br>" +
						"&bull; Implemented sessions using cookies and a timeout<br>" +
						"&bull; Used Node.js via Express framework, implementing handlebars<br>" +
						"&bull; Includes npm modules such as fs, path, client-sessions, body-parser"),
	alternate[3].concat("<br><strong>Android app to store Addresses<br>Languages: Java Android, XML</strong><br><br>" +
					  	"&bull; Add, display, edit, delete contacts<br>" +
						"&bull; Coded to work in both portrait and landscape, as well as in French<br>" +
						"&bull; Uses SQLite database for data persistence<br>" +
						"&bull; Customised UI with icons and images<br>" +
						"&bull; Uses activity, fragment activity, toast, spinners, and a linear layout"),
]

var total = source.length;
var current = 0;

document.addEventListener("keydown", keyChecker);

function loadImg(images, desired) {
	document.getElementById("mainImg").src = source[current];
	document.getElementById("mainImg").alt = alternate[current];
	document.getElementById("mainImg").setAttribute("class", "loaded");
	document.getElementById("mainTxt").innerHTML = caption[current];
	resizeImg(images, desired);
}
function resizeImg(images, desired) {
	images.height = desired;
	images.onload = "";
}
function changeImg(changeto) {
	current = changeto;
	document.getElementById("mainImg").src = source[current];
	document.getElementById("mainImg").alt = alternate[current];
	document.getElementById("mainTxt").innerHTML = caption[current];
}
function keyChecker(keycode) {
	if (keycode.key == "ArrowLeft") {
		if (current > 0) {
			changeImg(current - 1);
		}
		else if (current == 0) {
			changeImg(total - 1);
		}
	}
	else if (keycode.key == "ArrowRight") {
		if (current < total - 1) {
			changeImg(current + 1);
		}
		else if (current == total - 1) {
			changeImg(0);
		}
	}
}
