(function(){
	function Xiala(){
		this.btn = $("#btn");
		this.list = $(".list");
	}
	Xiala.prototype = {
		constructor:Xiala,
		init:function(){
			this.xiala();
		},
		xiala:function(){
			var that = this;
			this.btn.on("click",function(){
				that.list.slideToggle(500);
			})
		},
	}
	var xiala = new Xiala();
	xiala.init();
}())
