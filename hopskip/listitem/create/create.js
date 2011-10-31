steal( 'jquery/controller',
       'jquery/view/ejs',
	   'jquery/dom/form_params',
	   'jquery/controller/view',
	   'hopskip/models' )
	.then('./views/init.ejs', function($){

/**
 * @class Hopskip.Listitem.Create
 * @parent index
 * @inherits jQuery.Controller
 * Creates listitems
 */
$.Controller('Hopskip.Listitem.Create',
/** @Prototype */
{
	init : function(){
		this.element.html(this.view());
	},
	submit : function(el, ev){
		ev.preventDefault();
		this.element.find('#create button').val('Creating...')
		new Hopskip.Models.Listitem(el.formParams()).save(this.callback('saved'));
	},
	saved : function(){
		this.element.find('#create button').val('Create');
		this.element[0].reset()
	}
})

});