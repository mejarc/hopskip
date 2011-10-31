steal("funcunit/qunit", "hopskip/fixtures", "hopskip/models/listitem.js", function(){
	module("Model: Hopskip.Models.Listitem")
	
	test("findAll", function(){
		expect(4);
		stop();
		Hopskip.Models.Listitem.findAll({}, function(listitems){
			ok(listitems)
	        ok(listitems.length)
	        ok(listitems[0].name)
	        ok(listitems[0].description)
			start();
		});
		
	})
	
	test("create", function(){
		expect(3)
		stop();
		new Hopskip.Models.Listitem({name: "dry cleaning", description: "take to street corner"}).save(function(listitem){
			ok(listitem);
	        ok(listitem.id);
	        equals(listitem.name,"dry cleaning")
	        listitem.destroy()
			start();
		})
	})
	test("update" , function(){
		expect(2);
		stop();
		new Hopskip.Models.Listitem({name: "cook dinner", description: "chicken"}).
	            save(function(listitem){
	            	equals(listitem.description,"chicken");
	        		listitem.update({description: "steak"},function(listitem){
	        			equals(listitem.description,"steak");
	        			listitem.destroy();
						start();
	        		})
	            })
	
	});
	test("destroy", function(){
		expect(1);
		stop();
		new Hopskip.Models.Listitem({name: "mow grass", description: "use riding mower"}).
	            destroy(function(listitem){
	            	ok( true ,"Destroy called" )
					start();
	            })
	})
})