;(function() {
	var url, obj, index;
	// 获取URL参数
	var queryObj = function(url) {
		var reg = /([^\?\&\=]+)\=([^\?\&\=]*)/ig;
		var obj = {};
		while (reg.test(url)) {
			obj[RegExp.$1] = RegExp.$2;
		}
		return obj;
	};

	url = window.location.href;
	obj = queryObj(url);
	index = obj.h || obj.w; // 获取h参数

	// 改变{{index}}模板
	var pic = document.querySelector('.pic-box');
	// 处理首尾空格
	var tpl_pic = pic.innerHTML.replace(/^\s*/, '')
		.replace(/\s*$/, '');
	var _html_pic = tpl_pic.replace(/{{index}}/, index);
	pic.innerHTML = _html_pic;
})();