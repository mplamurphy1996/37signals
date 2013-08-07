$( document ).ready(function() {
    /* On enter of each individual product block:
     * 1. hide headers
     * 2. show products header text
     * 3. add red arrow from block to header */
    $("#pr_bc").on("mouseenter", function() {
       hideHeaders();
       $(this).closest(".main").find("#hdr_bc").show();
       $(this).find("#hdr_img_bc").show();
    });
    $("#pr_hr").on("mouseenter", function() {
       hideHeaders();
       $(this).closest(".main").find("#hdr_hr").show();
       $(this).find("#hdr_img_hr").show();
   });
    $("#pr_cf").on("mouseenter", function() {
       hideHeaders();
       $(this).closest(".main").find("#hdr_cf").show();
       $(this).find("#hdr_img_cf").show();
   });
    
    /* when moving mouse out of product blocks, remove all headers, and replace with default */
    $(".product").on("mouseleave", function() {
       hideHeaders();
       $(this).closest(".main").find(".hdr_default").show();
    });
});

/* Hides all content for the header section of the page. Default message, all hdr types, and the arrows  */
function hideHeaders() {
    $(".hdr_default").hide(); 
    $(".hdr").hide();
    $(".hdr_img").hide();
}
