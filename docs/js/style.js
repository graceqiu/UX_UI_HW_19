$(document).ready(function() {
    $("#secondaryNav").hide();
    $("#logoActive").hide();
    $("body").fadeIn(500);
});

$("#primaryNavProjects").click(function() {
    $("#secondaryNav").slideToggle(function() {
        // callback to wait till animation is done before testing for :hidden, otherwise will be faulty
        if ($("#secondaryNav").is(":hidden")) {
            $("#secondaryNavToggle").css({"color": ""}); // reset to default
        } else {
            $("#secondaryNavToggle").css({"color": "#32584C"});
        }
    });
});

$("#logo").hover(function() {
    $(this).text("graceqiu").removeClass("altTextPrimary").addClass("altTextSecondary").fadeIn();
}, function() {
    $(this).text("gq").removeClass("altTextSecondary").addClass("altTextPrimary").fadeIn();
});