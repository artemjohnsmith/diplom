'use strict';

function loadData() {
    $.get('../data/template.html', render);
}

function createImage(src) {
    return '<img style="width: 100px" src="' + src + '"></img>';
}

function render(template) {
    $('#target').empty();

    for (var i = 0; i < data.length; i++) {
        if (data[i].photo != undefined) {
            data[i].photo = createImage(data[i].photo);
        }

        var rendered = Mustache.render(template, data[i]);
        $('#target').append(rendered);
    }
}
