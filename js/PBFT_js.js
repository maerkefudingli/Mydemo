window.onload = function() {
 	var speedX = 5;
 	var speedY = 3;
 	var div = document.getElementById("yd");

 	function move() {
 		var cleft = parseInt(window.getComputedStyle(div).left);
 		var ctop = parseInt(window.getComputedStyle(div).top);
 		check(div);
 		var left = cleft + speedX;
 		var top = ctop + speedY;
 		div.style.left = left + 'px';
 		div.style.top = top + 'px';
 	}
 	setInterval(move, 30);

 	function check(el) {
 		var style = window.getComputedStyle(el);
 		var left = parseInt(style.left);
 		var top = parseInt(style.top);
 		var w = parseInt(style.width);
 		var h = parseInt(style.height);
 		if (left < 0) {
 			left = 0;
 			speedX *= -1
 		}
 		if (left > window.innerWidth - w) {
 			left = window.innerWidth - w;
 			speedX *= -1;
 		}
 		if (top < 0) {
 			top = 0;
 			speedY *= -1;
 		}
 		if (top > window.innerHeight - h) {
 			top = window.innerHeight - h;
 			speedY *= -1;
 		}
 		el.style.top = top + 'px';
 		el.style.left = left + 'px';
 	}
 }
