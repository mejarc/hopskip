steal('jquery/controller', 'jquery/view/ejs', 'jquery/controller/view', 'hopskip/models').then('./views/init.ejs', //views
'./views/listitem.ejs', //views

function($) {

    /**
     * @class Hopskip.Listitem.List
     * @parent index
     * @inherits jQuery.Controller
     * Lists listitems; lets you destroy them.
     */
    $.Controller('Hopskip.Listitem.List', /** @Static */ {
        defaults: {}
    }, /** @Prototype */ {
        init: function() {
            this.element.html(this.view('init',Hopskip.Models.Listitem.findAll()) )
            //console.log();
        },
        '.destroy click': function(el) {
            if (confirm("Are you sure you want to destroy?")) {
                el.closest('.listitem').model().destroy();
            }
        },
        "{Hopskip.Models.Listitem} destroyed": function(Listitem, ev, listitem) {
            listitem.elements(this.element).remove();
        },
        "{Hopskip.Models.Listitem} created": function(Listitem, ev, listitem) {
            this.element.append(this.view('init', [listitem]));
        },
        "{Hopskip.Models.Listitem} updated": function(Listitem, ev, listitem) {
            listitem.elements(this.element).html(this.view('listitem', listitem));
        }
    });

});