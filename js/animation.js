(function($) {
$.fn.visible = function(partial) {
    
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};
    
})(jQuery);

var win = $(window);

var allMods = $(".slidein");
var allMods2 = $(".fade");
// allMods.each(function(i, el) {
// var el = $(el);
// if (el.visible(true)) {
//     el.addClass("already-visible"); 
// } 
// });

win.scroll(function(event) {

allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
    el.addClass("come-in"); 
    } 
});

allMods2.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
    el.addClass("fadein"); 
    } 
});
});
$(document).ready(function(){
    $("button").click(function(){
        $("header div").css({"opacity":0, "visibility":"hidden"});
        setTimeout(function() { alert("Chúc mừng bạn 'suýt' nhận được 2 gói bột giặt OMO!"); }, 500);
    });
});
$('.text').html(function(i, html) {
    var chars = $.trim(html).split("");
    return '<span>' + chars.join('</span><span>') + '</span>';
});