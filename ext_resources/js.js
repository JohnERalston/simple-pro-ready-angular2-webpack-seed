
$(document).ready(function(){
    var i = 0;
    setInterval(function(){
        var $el = $('#jqueryTarget');
        $el.text(i);
        i++;
    },1000);
});