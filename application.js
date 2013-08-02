$( document ).ready(function() {
    $("#pr_bc").on("mouseenter", function() {
       hideHeaders();
       //showHeaders("bc");
       $(this).closest(".main").find("#hdr_bc").show();
       $(this).find("#hdr_img_bc").show();
    });
    $("#pr_hr").on("mouseenter", function() {
       hideHeaders();
       //showHeaders("hr");
       $(this).closest(".main").find("#hdr_hr").show();
       $(this).find("#hdr_img_hr").show();
   });
    $("#pr_cf").on("mouseenter", function() {
       hideHeaders();
       //showHeaders("cf");
       $(this).closest(".main").find("#hdr_cf").show();
       $(this).find("#hdr_img_cf").show();
   });
    $(".product").on("mouseleave", function() {
       hideHeaders();
       $(this).closest(".main").find(".hdr_default").show();
    });
});

function hideHeaders() {
    $(".hdr_default").hide();
    $(".hdr").hide();
    $(".hdr_img").hide();
}

function showHeaders(suffix) {
    var hdrline = "#hdr_"+suffix;
    var imgline = "#hdr_img_"+suffix;
    alert(hdrline + "  <-->  " + imgline);
    $(this).closest(".main").find(hdrline).show();
    $(this).find(imgline).show();
}
