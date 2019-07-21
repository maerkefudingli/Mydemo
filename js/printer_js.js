var typeWriter = {
	msg: function(msg) {
		return msg;
	},
	len: function() {
		return this.msg.length;
	},
	seq: 0,
	speed: 150, //打字时间(ms)
	type: function() {
		var _this = this;
		document.getElementById("main").innerHTML = _this.msg.substring(0, _this.seq);
		if (_this.seq == _this.len()) {
			_this.seq = 0;
			clearTimeout(t);
		} else {
			_this.seq++;
			var t = setTimeout(function() {
				_this.type()
			}, this.speed);
		}
	}
}
window.onload = function() {
	var msg = "欢迎您来到马尔可夫定理的主页，这是一个演示打字机效果的特效。";

	function getMsg() {
		return msg;
	}
	typeWriter.msg = getMsg(msg);
	typeWriter.type();
}
