$(document).ready(function() {
    $("#secondaryNav").hide();
});

$("#primaryNavProjects").click(function() {
    if ($("#secondaryNav").is(":hidden")) {
        $(this).find("#secondaryNavToggle").css({"text-decoration": "underline", "color": "#32584C"});
    } else {
        $(this).find("#secondaryNavToggle").css({"text-decoration": "none", "color": "#181717"});
    }
    $("#secondaryNav").slideToggle();
});

