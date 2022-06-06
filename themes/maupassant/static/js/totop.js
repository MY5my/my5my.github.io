$(window).scroll(function() {
    $(window).scrollTop() > 500 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});
$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 500, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});
// var oHead = document.getElementsByTagName("HEAD").item(0);
// var oScript = document.createElement("script");
// oScript.type = "text/javascript";
// oScript.src = "https://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.js";
// oScript.charset="utf-8";
// oHead.appendChild(oScript);