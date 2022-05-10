$(document).ready(function() {
    $("#secondaryNav").hide();
    $("body").fadeIn(500);
});

$("#primaryNavProjects").click(function() {
    if ($("#secondaryNav").is(":hidden")) {
        $(this).find("#secondaryNavToggle").css({"text-decoration": "underline", "color": "#32584C"});
    } else {
        $(this).find("#secondaryNavToggle").css({"text-decoration": "", "color": ""}); // reset to default
    }
    $("#secondaryNav").slideToggle();
});

$("#logoInactive").mouseenter(function() {
    $(this).toggle();
    $(this).next().toggle();
}).mouseleave(function() {
    $(this).toggle();
    $(this).next().toggle();
});