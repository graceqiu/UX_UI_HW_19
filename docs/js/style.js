$(document).ready(function() {
    $("#secondaryNav").hide();
    $("#logoActive").hide();
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

$("#logo").hover(function() {
    $(this).text("graceqiu").removeClass("altTextPrimary").addClass("altTextSecondary").fadeIn();
}, function() {
    $(this).text("gq").removeClass("altTextSecondary").addClass("altTextPrimary").fadeIn();
});