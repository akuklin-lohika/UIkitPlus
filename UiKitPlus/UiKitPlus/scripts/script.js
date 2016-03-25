$(document).ready(function () {
    $("input[name='check']").click(function (e) {
        e.preventDefault();
		var that = this;    
		setTimeout(function() { that.checked = !that.checked; }, 1);   
    });
});

function test() {
    var div = $('#clr').context.childNodes[1].childNodes[2].children[9].children[0];
    div.zIndex = 2;
}
