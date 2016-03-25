$(document).ready(function () {
    $("input[name='check']").click(function (e) {
        e.stopPropagation();
    });
});

function test() {
    var div = $('#clr').context.childNodes[1].childNodes[2].children[9].children[0];
    div.zIndex = 2;
}

function prevent(e){
    return false;
}