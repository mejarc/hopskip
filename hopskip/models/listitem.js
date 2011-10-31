steal('jquery/model', function(){

/**
 * @class Hopskip.Models.Listitem
 * @parent index
 * @inherits jQuery.Model
 * Wraps backend listitem services.  
 */
$.Model('Hopskip.Models.Listitem',
/* @Static */
{
   	//findAll: "/listitems.json",
  	findOne : "/listitems/{id}.json", 
  	//create : "/listitems.json",
 	//update : "/listitems/{id}.json",
  	destroy : "/listitems/{id}.json"
},
/* @Prototype */
{});

})