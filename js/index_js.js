window.onload = function() {
				setInterval(function() {
					var now = new Date();
					var h = now.getHours();
					var m = now.getMinutes();
					var s = now.getSeconds();
					var _date = [
						h < 10 ? 0 : Math.floor(h / 10), h % 10,
						m < 10 ? 0 : Math.floor(m / 10), m % 10,
						s < 10 ? 0 : Math.floor(s / 10), s % 10
					];
					var imgs = document.getElementsByClassName('date');
					for (var i = 0; i < imgs.length; i++) {
						imgs[i].src = "img/" + _date[i] + ".png";
					}
				}, 1000)
			}