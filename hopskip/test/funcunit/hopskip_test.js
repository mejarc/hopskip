steal("funcunit", function(){
	module("hopskip test", { 
		setup: function(){
			S.open("//hopskip/hopskip.html");
		}
	});
	
	test("Copy Test", function(){
		equals(S("h1").text(), "Welcome to JavaScriptMVC 3.2!","welcome text");
	});
})