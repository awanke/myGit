function regist() {
		$.ajax({
			type : "POST",
			url : "/action/user/regist",
			dataType:"text",
			success : function(msg) {
				$("#showMsg").text(msg);
			}
		});
}
function login() {
	$.ajax({
		type : "POST",
		url : "/test.do",
		data : {fun:"showMsgAjax"},
		dataType:"text",
		success : function(msg) {
			$("#showMsg").text(msg);
		}
	});
}
function login() {
		$.ajax({
			type : "POST",
			url : "/test.do",
			data : {fun:"showMsgAjax"},
			dataType:"text",
			success : function(msg) {
				$("#showMsg").text(msg);
			}
		});
}
//判断浏览器类型
function getOs() {  
	var OsObject = "";  
	if(navigator.userAgent.indexOf("MSIE")>0) {  
		return "MSIE";  
	}  
	if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){  
		return "Firefox";  
	}  
	if(isSafari=navigator.userAgent.indexOf("Safari")>0) {  
		return "Safari";  
	}   
	if(isCamino=navigator.userAgent.indexOf("Camino")>0){  
		return "Camino";  
	}  
	if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){  
	     return "Gecko";  
	}  
}  
