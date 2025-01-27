var click = $("#menuClick");
 function open_menu() {
 $("body").append("<div class='js-overlay'></div>");
 setTimeout(function(){
 $("body").addClass("js-menu-active");
 }, 100);
 }
 function close_menu() {
 setTimeout(function(){
 $(".js-overlay").remove();
 }, 300);
 $("body").removeClass("js-menu-active");
 }
 click.click(function(e) {
 var framebarasset = document.getElementsByClassName("framebarasset-lazy");
 if(framebarasset.length != 0) {
 var imgframebarasset = framebarasset[0].querySelectorAll("[data-src]");
 for (let i = 0; i < imgframebarasset.length; i++) {
 imgframebarasset[i].setAttribute("src", imgframebarasset[i].getAttribute("data-src"));
 imgframebarasset[i].removeAttribute("data-src")
 }
 }
 e.preventDefault();
 if($("body").hasClass("js-menu-active")) {
 close_menu();
 }
 else {
 open_menu();
 var scroll = $(window).scrollTop();
 var height_billboard = $("#megabillboard").height();
 if (($("#megabillboard").length) && (scroll < height_billboard)) {
 $("html, body").animate({ scrollTop: height_billboard });
 }
 }
 $(document).bind("mouseup touchend", function(e) {
 var this_click = $(".box-overlay, #menuClick");
 if ($("body").hasClass("js-menu-active")) {
 if (!this_click.is(e.target) // if the target of the click isn't the container...
 && this_click.has(e.target).length === 0) // ... nor a descendant of the container
 {
 setTimeout(function() {
 $(".js-overlay").remove();
 },300);
 $("body").removeClass("js-menu-active");
 }
 }
 });
 $(document).on("mousewheel", function(e) {
 var scroll = $(window).scrollTop();
 if (($("body").hasClass("js-menu-active")) && ($("#megabillboard").length) && (scroll < height_billboard)) {
 close_menu();
 }
 });
 $(document).on("touchmove", function() {
 $(document).trigger("mousewheel");
 });
 });
