//js hopskip/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('hopskip/hopskip.html', {
		markdown : ['hopskip']
	});
});