$(document).ready(function(){
    let $ul = $(".nav-sublist"),
        $menu =$(".nav-list-item-link");
    $($menu).click(function(){
        $ul.toggleClass("nav-sublist-click");
        
    });
});

$(document).ready(function(){
  let $ul = $(".nav-sublist");
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
    $ul.toggleClass("nav-sublist-click");
	});
});

(function () {
    const $menuBtn = $(".menu-btn");
  
    $menuBtn.on("click", function () {
      $(this).toggleClass("is-change");
      setMenuVisibility();
    });
  
    function setMenuVisibility() {
      if ($menuBtn.hasClass("is-change")) {
        $(".menu").stop(true, true).slideDown();
      } else {
        $(".menu").stop(true, true).slideUp();
      }
    }
  })();
 
 
$(function(){
    $('#BackTop').click(function(){ 
      $('html,body').animate({scrollTop:0}, 333);
    });
    $(window).scroll(function() {
      if ( $(this).scrollTop() > 300 ){
        $('#BackTop').fadeIn(222);
      } else {
        $('#BackTop').stop().fadeOut(222);
      }
    }).scroll();
  });

$(document).ready(function(){
    let $ul = $(".nav-sublist"),
        $rim =$(".header-selection-rim-a");
    $($rim).click(function(){
      var elements = document.getElementsByClassName("artistname");
      elements.innerHTML="里芽";
    });
});
(function () {
var Y = document.getElementsByid("artistname");
Y.innerHTML=里芽;
var element = document.getElementById("artistname");
element.innerHTML = "New Header";
});
function Showrim(){
  document.getElementById("artistname").innerHTML='里芽';
}

$(document).ready(function () {
  let menu_click = false;

  $(".navbar__icon-bar").click(function () {
    menu_click = !menu_click;
    if (menu_click) {
      $("..nav-sublist").addClass("nav-sublist-click");
      $(".navbar__icon-bar").attr("menu-click", "true");
    } else {
      $(".nav-sublist").removeClass("nav-sublist-click");
      $(".navbar__icon-bar").attr("menu-click", "false");
    }
  });
});