let menuBtn = document.querySelector('.header__mob-menu-btn');
let menu = document.querySelector('.mob-menu');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})



function viewpersonal() {
	var elems = document.getElementsByClassName('lessons__personal');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'block';
	var elems = document.getElementsByClassName('lessons__group');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
};
function viewgroup() {
	var elems = document.getElementsByClassName('lessons__personal');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
	var elems = document.getElementsByClassName('lessons__group');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'block';
};
function view30() {
	var elems = document.getElementsByClassName('lessons__products-items-60');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
	var elems = document.getElementsByClassName('lessons__products-items-90');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
	var elems2 = document.getElementsByClassName('lessons__products-items-30');
	for (var i = 0; i < elems2.length; i++)elems2[i].style.display = 'flex';
};
function view60() {
	var elems = document.getElementsByClassName('lessons__products-items-30');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
	var elems = document.getElementsByClassName('lessons__products-items-90');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
	var elems2 = document.getElementsByClassName('lessons__products-items-60');
	for (var i = 0; i < elems2.length; i++)elems2[i].style.display = 'flex';
}
;
function view90() {
	var elems = document.getElementsByClassName('lessons__products-items-30');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
	var elems = document.getElementsByClassName('lessons__products-items-60');
	for (var i = 0; i < elems.length; i++)elems[i].style.display = 'none';
	var elems2 = document.getElementsByClassName('lessons__products-items-90');
	for (var i = 0; i < elems2.length; i++)elems2[i].style.display = 'flex';
};
function rb1(col) {
	var elems = document.getElementsByClassName('rbb');
	for (var i = 0; i < elems.length; i++)elems[i].style.opacity = "0.2", elems[i].style.zIndex = "-1";
	var elems = document.getElementsByClassName('rb');
	for (var i = 0; i < elems.length; i++)elems[i].style.backgroundColor = 'transparent', elems[i].style.color = '#000';
	var elems = document.getElementsByClassName(`${col}rb-1`);
	for (var i = 0; i < elems.length; i++)elems[i].style.backgroundColor = '#0060fc', elems[i].style.color = '#fff', elems[i].style.borderRadius = '0px 15px 0px 14px';
	var elems = document.getElementsByClassName(`${col}rb-b-1`);
	for (var i = 0; i < elems.length; i++)elems[i].style.opacity = "1", elems[i].style.zIndex = "2";
};
function rb2(col) {
	var elems = document.getElementsByClassName('rbb');
	for (var i = 0; i < elems.length; i++)elems[i].style.opacity = "0.2", elems[i].style.zIndex = "-1";
	var elems = document.getElementsByClassName('rb');
	for (var i = 0; i < elems.length; i++)elems[i].style.backgroundColor = 'transparent', elems[i].style.color = '#000';
	var elems = document.getElementsByClassName(`${col}rb-2`);
	for (var i = 0; i < elems.length; i++)elems[i].style.backgroundColor = '#0060fc', elems[i].style.color = '#fff';
	var elems = document.getElementsByClassName(`${col}rb-b-2`);
	for (var i = 0; i < elems.length; i++)elems[i].style.opacity = "1", elems[i].style.zIndex = "2";
};
function cl(cla, cls) {
	var elems = document.getElementsByClassName(`${cls}`);
	for (var i = 0; i < elems.length; i++)elems[i].classList.remove('active');
	var elems = document.getElementsByClassName(`${cla}`);
	for (var i = 0; i < elems.length; i++)elems[i].classList.add('active');
}
//висота відгуків головна
$(function () {
	var column = 0;
	$('.review__content .review__item-text').each(function () {
		h = $(this).height();
		if (h > column) {
			column = h;
		}
	}).height(column);
});

function showHide(element_id) {
	if (document.getElementById(element_id)) {
		var obj = document.getElementById(element_id);
		if (obj.style.display != "block") {
			obj.style.display = "block";
		}
		else obj.style.display = "none";
	}
	else alert("Элемент с id: " + element_id + " не найден!");
}

$('.answer-radio').click(function () {
	$('.tests-btn').removeAttr("disabled");
});


//accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

//select
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 0; j < ll; j++) {
		/* For each option in the original select element,
		create a new DIV that will act as an option item: */
		c = document.createElement("DIV");
		c.classList.add('s-option');
		if (j == 0) {
			c.classList.add('same-as-selected');
		}
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/* When an item is clicked, update the original select box,
			and the selected item: */
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].classList.remove("same-as-selected");

						try {
							y[k].removeAttribute("selected");
						} catch (e) { }

						//y[k].removeAttribute("class", "same-as-selected");
					}
					//document.getElementById("div1").removeAttribute("align");
					y = this.parentNode.getElementsByClassName("same-as-selected");
					this.classList.add("same-as-selected");
					this.setAttribute("selected", "");
					//this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/* When the select box is clicked, close any other select boxes,
		and open/close the current select box: */
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
	except the current select box: */
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");

	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < xl; i++) {
		x[i].style.maxHeight = x[i].scrollHeight + "px";
	}
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}


/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
//

//

//положення ссилкидомашні завдання
if ($(window).width() <= 1300) {
	var x = document.getElementsByClassName('homework-item__inner');
	var y = document.getElementsByClassName('homework-item-link');
	ylen = y.length;
	for (i = 0; i < ylen; i++) {
		y[i].style.top = (x[i].clientHeight - 35) + 'px';
	}
}

function f(fn) {
	var elems = document.getElementsByClassName('f.active');
	if (fn == elems) {

	}
	var elems = document.getElementsByClassName('f');
	for (var i = 0; i < elems.length; i++)elems[i].classList.remove('active');
	var elems = document.getElementsByClassName($fn);
	for (var i = 0; i < elems.length; i++)elems[i].classList.add('active');
	var elems = document.getElementsByClassName(`${col}rb-1`);
	for (var i = 0; i < elems.length; i++)elems[i].style.backgroundColor = '#0060fc', elems[i].style.color = '#fff', elems[i].style.borderRadius = '0px 15px 0px 14px';
	var elems = document.getElementsByClassName(`${col}rb-b-1`);
	for (var i = 0; i < elems.length; i++)elems[i].style.opacity = "1", elems[i].style.zIndex = "2";
};

//books mixitup
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
//установка значення в дропдаун на сторінці книги в кнопку
$(function () {

	$(".dropdown-menu-main li button").click(function () {

		$(".btn:first-child").text($(this).text());
		$(".btn:first-child").val($(this).text());
	});

	$(".header-top-account-btn").click(function () {
		$(this).addClass('header-top-account-btn--active')
	});
	

});
$(function () {

	$(".dropdown-menu-mobile li button").click(function () {

		$(".btn:first-child").text($(this).text());
		$(".btn:first-child").val($(this).text());
	});

	$(".dropdown-books").click(function () {
		$('.dropdown-books-list').toggleClass('dropdown-books-list--active')
	});
	
	$(".dropdown-menu-btn").click(function () {
		$('.main__books').toggleClass('main__books--act')
	});
});

$(function () {

	$(".dropdown-menu-mobilem li button").click(function () {

		$(".btnm:first-child").text($(this).text());
		$(".btnm:first-child").val($(this).text());
	});

});

var acc2 = document.getElementsByClassName("password-btn");
var i;

for (i = 0; i < acc2.length; i++) {
	acc2[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = document.getElementById("password");
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			panel.style.overflow = 'hidden';
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			panel.style.overflow = 'visible';
		}
	});
}
var acc2 = document.getElementsByClassName("plogs-btn");
var i;

for (i = 0; i < acc2.length; i++) {
	acc2[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var panel = document.getElementById("plogs");
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			panel.style.overflow = 'hidden';
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
			panel.style.overflow = 'visible';
		}
	});
}

$(document).ready(function () {
	$('.flowing-scroll').click(function () { // ловим клик по ссылке с классом go_to
		if (!this.classList.contains("active")) {
			this.classList.remove("active");
		} else {
			this.classList.add("active");
			var scroll_el = $(this).attr('ahref'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
			if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
				$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
			}
		}
		return false; // выключаем стандартное действие
	});
	$('.flag').click(function () { // ловим клик по ссылке с классом go_to
		var ff = this;
		if (!ff.classList.contains("active")) {
			!jQuery('.flag').removeClass("active");
			!jQuery(ff).addClass('active');

		} else {
			!jQuery(ff).removeClass("active");

		}
		return false; // выключаем стандартное действие
	});
	$('.header-top__notification-btn').click(function () { // ловим клик по ссылке с классом go_to
		var ff = this;
		//! jQuery('.popup__notifications-main').css({ top: $('.popup__notifications-main').height() });
		if (!ff.classList.contains("active")) {
			!jQuery(ff).addClass('active');
			!jQuery('.popup__notifications-main').addClass('active');
		} else {
			!jQuery(ff).removeClass("active");
			!jQuery('.popup__notifications-main').removeClass('active');

		}
		return false; // выключаем стандартное действие
	});
});
function goradio(rurl, platf, mountp, name) {
	var elems1 = document.getElementsByClassName('pauseBtn');
	for (var i = 0; i < elems1.length; i++)elems1[i].click();
	var elems2 = document.getElementsByClassName('p3-wrapper');
	for (var i = 0; i < elems2.length; i++)elems2[i].remove();
	var p1 = new player3({ target: "#p1", url: `${rurl}`, platform:`${platf}`, mountPoint: `${mountp}`, logo: "./image/radio-img.jpg", artwork: 1, bg: "#0060FC", songtitle: "#FFFFFF", artist: "#FFFFFF", btns: "#FFFFFF", }, {});
	var elems3 = document.getElementsByClassName('playBtn');
	setTimeout(
		function() 
		{
			for (var i = 0; i < elems3.length; i++)elems3[i].click();
		}, 1000);
		$('.p3-title').text(name);
	return true
}
var starRatingControl = new StarRating('.star-rating',{
	maxStars: 5
});
var starRatingControl = new StarRating('.star-rating-pannel',{
	maxStars: 5,
});





