!function(t){t.fn.menumaker=function(e){var i=t(this),n=t.extend({title:"Menu",format:"dropdown",sticky:!1},e);return this.each(function(){return i.prepend('<div id="menu-button">'+n.title+"</div>"),t(this).find("#menu-button").on("click",function(){t(this).toggleClass("menu-opened");var e=t(this).next("ul");e.hasClass("open")?e.hide().removeClass("open"):(e.show().addClass("open"),"dropdown"===n.format&&e.find("ul").show())}),i.find("li ul").parent().addClass("parent"),multiTg=function(){i.find(".parent").prepend('<span class="submenu-button"></span>'),i.find(".submenu-button").on("click",function(){t(this).toggleClass("submenu-opened"),t(this).siblings("ul").hasClass("open")?t(this).siblings("ul").removeClass("open").hide():t(this).siblings("ul").addClass("open").show()})},"multitoggle"===n.format?multiTg():i.addClass("dropdown"),n.sticky===!0&&i.css("position","fixed"),resizeFix=function(){window.innerWidth>1140&&i.find("ul").show(),window.innerWidth<=1140&&i.find("ul").hide().removeClass("open")},resizeFix(),t(window).on("resize",resizeFix)})}}(jQuery),function(t){t(document).ready(function(){t(document).ready(function(){t("#hmenu").menumaker({title:"Menu",format:"multitoggle"}),t("#hmenu").prepend("<div id='menu-line'></div>");var e,i,n,s,o=!1,r=0,a=t("#hmenu #menu-line");t("#hmenu > ul > li").each(function(){t(this).hasClass("active")&&(e=t(this),o=!0)}),o===!1&&(e=t("#hmenu > ul > li").first()),s=i=e.width(),n=r=e.position().left,a.css("width",i),a.css("left",r),t("#hmenu > ul > li").hover(function(){e=t(this),i=e.width(),r=e.position().left,a.css("width",i),a.css("left",r)},function(){a.css("left",n),a.css("width",s)})})})}(jQuery),function(t){"use strict";t.fn.stickMe=function(e){function i(){g.animate===!0&&"slide"===g.transitionStyle&&g.stickyAlready!==!0&&l.slideDown(g.transitionDuration),g.animate===!0&&"fade"===g.transitionStyle&&g.stickyAlready!==!0?l.fadeIn(g.transitionDuration):l.show(),l.removeClass("not-sticking")}function n(){l.hasClass("sticking")&&l.trigger("sticking"),0===u&&(u=1,g.stickyAlready===!1&&l.trigger("sticky-begin")),l.hasClass("not-sticking")&&(l.hide(),i()),g.shadow===!0&&l.css("box-shadow","0px 1px 2px rgba(0,0,0,"+g.shadowOpacity+")"),l.addClass("sticking").css("position","fixed").css("top","0"),d.css("padding-top",h)}function s(){g.shadow===!0&&l.css("box-shadow","none"),l.addClass("not-sticking").removeClass("sticking").show().css("position","relative"),d.css("padding-top","0")}var o,r,a=t(window),c=t(document),d=t("body"),u=0,l=this,h=l.innerHeight(),f=a.height()/2,g=t.extend({transitionDuration:300,shadow:!1,shadowOpacity:.3,animate:!0,triggerAtCenter:!0,topOffset:h,transitionStyle:"fade",stickyAlready:!1},e);switch(l.addClass("stick-me").addClass("not-sticking"),g.triggerAtCenter){case g.triggerAtCenter&&g.topOffset<h||g.triggerAtCenter&&g.topOffset>h:g.triggerAtCenter=!1}return g.stickyAlready&&(g.triggerAtCenter=!1,g.topOffset=0,n()),o=l.offset().top,a.scroll(function(){r=a.scrollTop(),0===r&&(u=0,l.trigger("top-reached")),g.triggerAtCenter===!0&&r>f+h&&n(),g.triggerAtCenter===!1&&r>g.topOffset&&n(),r+a.height()>c.height()-1&&l.trigger("bottom-reached"),g.triggerAtCenter===!0&&r<1+o&&s(),g.triggerAtCenter===!1&&r<1&&g.stickyAlready!==!0&&s()}),this}}(jQuery),$(function(){$(".header__bottom").stickMe()}),$("#header__bottom--search-btn").click(function(){var t=document.getElementById("search__form-wrap");$(t).toggleClass("active")}),$(function(){$("#top-slider").bxSlider({mode:"fade",pager:!1})}),$(function(){$("#review__slider").bxSlider({mode:"fade",pager:!1})}),$(function(){jQuery(function(t){var e=0;t(".personal-sec__item").each(function(){t(this).height()>e&&(e=t(this).height())}),t(".personal-sec__item").height(e)})}),$(function(){function t(t){var e=0;t.css("height",""),t.each(function(){currentHeight=$(this).height(),currentHeight>e&&(e=currentHeight)}),t.height(e)}var e=$(".personal-sec__item");$(window).resize(function(){t(e)})}),$(function(){$("#arrow-up").click(function(){return $("html, body").animate({scrollTop:0},1e3),!1})}),$(function(){window.onscroll=function(){var t=document.getElementById("arrow-up");window.pageYOffset>500?$(t).addClass("active"):$(t).removeClass("active")}}),$(function(){$(".popupOpen").click(function(t){return t.preventDefault(),$(".feedback, .layerBox").fadeIn(),!1}),$(".feedback .btnBox").click(function(){return $(".feedback").fadeOut(),$(".success").fadeIn(),!1}),$(".layerBox, .success .btnBox, .close_bth").click(function(){return $(".layerBox, .popupBox").fadeOut(),!1})});