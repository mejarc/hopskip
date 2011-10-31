function getUrlVars() {
    var vars = [],
        i = 0,
        hash, hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function getUrlVar(name) {
    return getUrlVars()[name];
}

function createList(ct) {
    var suffix, 
        $list = $('#listitems'),
        listitem, j, i = 0;
    for (; i < ct; i++) {
        suffix = '';
        j = ($list.children().length + 1);
        if ((j % 3) === 0) {
            suffix += 'Hop';
        }
        if ((j % 5) === 0) {
            suffix += ' Skip';
        }
        listitem = $('<li>').html('<span>' + j + '</span>&nbsp;' + suffix).appendTo($list);
    }
}
$(function() {
    $('#add button').click(function() { //add to list
        var addTxt = $('#add_to_list').val();
        $('#add').submit(function() {
            return false;
        });
        if (isNaN(addTxt) || addTxt === '') {
            addTxt = 10;
        }
        createList(addTxt);
    });
});
steal('./hopskip.css', './models/models.js', function() { //create list onload
    var list_length = getUrlVar('list_length') || 1;
    createList(list_length);
});