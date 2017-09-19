;(function() {
	var queryObj = function(url) {
		var reg = /([^\?\&\=]+)\=([^\?\&\=]*)/igm;
		var obj = {};
		while (reg.test(url)) {
			obj[RegExp.$1] = RegExp.$2;
		}
		return obj;
	};

	var url = window.location.href;
	var obj = queryObj(url);

	if (!!obj.q && obj.q === "back") {
 	$(".Open1").eq(0).css("z-index","13");
    	$(".Open1").eq(0).animate({"opacity":"1"},500);
               show();
	}
})();
//加载完成执行函数
window.onload = function() {
		//	Amin(-45, 1, 0, 0, 450, "block");    transform: ;
		var i = 0;
		//setInterval(moves,500);
		function moves() {
			//	    $(".swiper-slide").eq(i).css("transform","translate3d(0px, 0px, 0px) scale(1)");
			i++;
		}

		$('#PageRefresh').click(function() {
			$(".Open1").eq(0).animate({
				"left": "640px"
			}, 1000, function() {
				Amin(-45, 1, 0, 0, 450, "block");
			});
		});
Amin(-45, 1, 0, 0, 450);
    $("#Open").click(function (){
    	$(".conguangg").eq(0).css("z-index","12");
    	$(".conguangg").eq(0).animate({"opacity":"1"},1000,function (){
    		setTimeout(Oufa,3000)
    	});
    })
		
	}
//时间差淡出
function Oufa(){
                show();
    	$(".Open1").eq(0).css("z-index","13");
                
    			$(".Open1").eq(0).animate({"opacity":"1"},500);
    		}
	//导航页面动画
function show() {
		$("#PosiNav1").animate({
			"top": "-45px",
			"opacity": "1"
		}, 800);
		$("#Footer_by1").animate({
			"margin-top": "0px",
			"opacity": "1"
		}, 800, function() {
			$(".BYangLoGo1").eq(0).animate({
				"opacity": "1"
			}, 800);
			$(".HxangLoGo1").eq(0).animate({
				"opacity": "1"
			}, 1800, function() {
				$("#wzp1").animate({
					"opacity": "1"
				}, 2500);
				$("#ym1").animate({
					"left": "450px",
					"display": "block"
				}, 1400);
				$("#yuyu").animate({
					"opacity": "1"
				}, 1000);
			});
		});

	setTimeout(setTime, 2000);

	function setTime() {
		$("#Liuq").animate({
			"margin-left": "0px"
		}, 1000);
		$("#Liuq1").animate({
			"margin-left": "80px"
		}, 1000);
	}
	//	Amin(-90, 0, 137, -300, 150, "none");
}
//开启页面样式
function Amin(lefs, opA, manTop, maLef, lefss, sty) {
	$("#PosiNav").animate({
		"top": lefs + "px",
		"opacity": opA
	}, 800);
	$("#Footer_by").animate({
		"margin-top": manTop + "px",
		"opacity": opA
	}, 800, function() {
		$(".BYangLoGo").eq(0).animate({
			"opacity": opA
		}, 400, function() {
			$(".Wzjiant").eq(0).animate({
				"margin-left": maLef + "px",
				"opacity": opA
			}, 1000);
			$(".Wzjiant1").eq(0).animate({
				"margin-left": maLef + "px",
				"opacity": opA
			}, 1000, function() {
				$(".OpenLoGo").eq(0).animate({
					"opacity": opA
				}, 1000, function() {})
			});
			$("#wzp").animate({
				"opacity": opA
			}, 2500);
			$("#ym").animate({
				"left": lefss + "px",
				"display": sty
			}, 1400);
			$(".HxangLoGo").eq(0).animate({
				"opacity": opA
			}, 3000);
		})
	});
}
function amin(){
	$("#PosiNav").css({"top":"96px","opacity":"0"});
	$("#Footer_by").css({"opacity":"0","margin-top":"137px"});
	$(".BYangLoGo").eq(0).css("opacity","0");
	$(".Wzjiant1").eq(0).css({"margin-left":"300px","opacity":"0"});
	$(".OpenLoGo").eq(0).css("opacity","0");
	$(".HxangLoGo").eq(0).css("opacity","0");
}
