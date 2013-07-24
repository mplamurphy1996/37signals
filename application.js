$( document ).ready(function() {
    $("#pr_bc").on("mouseenter", function() {
       hideHeaders();
       $(this).closest(".main").find("#hdr_bc").show();
       $(this).closest(".main").find("#hdr_img_bc").show();
    });
    $("#pr_hr").on("mouseenter", function() {
       hideHeaders();
       $(this).closest(".main").find("#hdr_hr").show();
       $(this).closest(".main").find("#hdr_img_hr").show();
   });
    $("#pr_cf").on("mouseenter", function() {
       hideHeaders();
       $(this).closest(".main").find("#hdr_cf").show();
       $(this).closest(".main").find("#hdr_img_cf").show();
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
