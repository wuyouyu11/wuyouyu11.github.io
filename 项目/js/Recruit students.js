function Jiaju(ele){
	this.article = ele;
}
Jiaju.prototype = {
	constructor:Jiaju,
	init:function(){
		this.bindEventFn();
		this.chuliFn();
	},
	bindEventFn:function(){
		var that = this;
		$.get("data.json",function(data){
		console.log(data);
		var templateString = $("#template").html();
		data = typeof data == "object" ? data : eval("("+data+")");
		var dataArry = data.data;	
		for (var i = 0; i < dataArry.length; i++) {
			var DOMString = that.chuliFn(templateString,dataArry[i]);
				that.article.append(DOMString);
			}
		})	
	},
	chuliFn:function(templateString,data){
		return templateString.replace(/\@([a-z\w]+)\@/g,function(match,$1,index,string){
			return data[$1];
		})
	}
}
var zhibo = new Jiaju($(".content"));
zhibo.init();