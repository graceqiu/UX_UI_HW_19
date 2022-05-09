$(document).ready(function() {
    $("#secondaryNav").hide();
});

$("#primaryNavProjects").click(function() {
    $("#secondaryNav").slideToggle();
});