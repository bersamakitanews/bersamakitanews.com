 var click = $("#menuClick");
 var search = $("#searchClick");
 var closeSearch = $("#searchClose");
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
 if ($("body").hasClass("js-menu-active")) {
 close_menu();
 } else {
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
 if (
 !this_click.is(e.target) &&// if the target of the click isn't the container...
 this_click.has(e.target).length === 0
 ) { // ... nor a descendant of the container
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
 // NEW SEARCH
 function open_search() {
 $("body").append("<div class='js-overlay'></div>");
 $(".search-overlay__input").focus();
 setTimeout(function(){
 $("body").addClass("search-active");
 }, 100);
 }
 function close_search() {
 setTimeout(function(){
 $(".js-overlay").remove();
 }, 300);
 $("body").removeClass("search-active");
 }
 search.click(function(e) {
 e.preventDefault();
 getScript("https://cdn.detik.net.id/assets/js/framebar/search.js", function () {
 getScript("https://cdn.detik.net.id/assets/js/framebar/search-autocomplete.js", function () {
 var searchasset = document.getElementsByClassName("searchasset-lazy");
 if(searchasset.length != 0) {
 var imgsearchasset = searchasset[0].querySelectorAll("[data-src]");
 for (let i = 0; i < imgsearchasset.length; i++) {
 imgsearchasset[i].setAttribute("src", imgsearchasset[i].getAttribute("data-src"));
 imgsearchasset[i].removeAttribute("data-src")
 }
 }
 let params = {};
 const json = document.querySelector('[data-itp-json="search"]');
 if (json) {
 params = JSON.parse(json.textContent);
 const searchbar = document.querySelector('[data-itp-form="searchbar"]');
 searchbar.action = params.url;
 }
 FramebarSearch(params).onLoad();
 CookiesSearch(params).onLoad();
 open_search();
 })
 })
 });
 closeSearch.click(function(e) {
 e.preventDefault();
 close_search();
 });
 $(".clear-list").click(function(e) {
 e.preventDefault();
 $(this).parent("li").remove();
 });
 var textCount = $("#search-text");
 textCount.on('keyup mouseup', function(e) {
 e.preventDefault();
 var charsEntered = textCount.val().length;
 if (charsEntered > 0) {
 $("#clear-search-text").removeClass("hide-element");
 $(".search-overlay__body-content").addClass("hide-element");
 $(".search-overlay__body-suggest").removeClass("hide-element");
 } else {
 $("#clear-search-text").addClass("hide-element");
 $(".search-overlay__body-suggest").addClass("hide-element");
 $(".search-overlay__body-content").removeClass("hide-element");
 }
 });
 $("#clear-search-text").click(function(e) {
 e.preventDefault();
 textCount.val("");
 $(this).addClass("hide-element");
 $(".search-overlay__body-suggest").addClass("hide-element");
 $(".search-overlay__body-content").removeClass("hide-element");
 });
