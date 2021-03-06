// ===== stickly header =====
$(function() {
    $('.header__bottom').stickMe();
});


// ===== search form visible =====
$('#header__bottom--search-btn').click(function() {
    var search = document.getElementById('search__form-wrap');
    $(search).toggleClass('active');
});


// ===== bx slider in top section =====
$(function() {
    $('#top-slider').bxSlider({
        mode: 'fade',
        pager: false
    });
})


// ===== bx slider in review section =====
$(function() {
    $('#review__slider').bxSlider({
        mode: 'fade',
        pager: false
    });
})


// ===== Выравнивание высоты фона у personal-sec__item =====
// === при загрузке ===
$(function() {
    jQuery(function($){
        var max_col_height = 0;
        $('.personal-sec__item').each(function(){
            if ($(this).height() > max_col_height) {
                max_col_height = $(this).height();
            }
        });
        $('.personal-sec__item').height(max_col_height);
    });
});
// === при ресайзе ===
$(function() {
    var columns = $('.personal-sec__item');
    $(window).resize(function () {
        setEqualHeight(columns);
    });

    function setEqualHeight(columns) {
        var tallestcolumn = 0;
        columns.css('height', '');
        columns.each(function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
        columns.height(tallestcolumn);
    }
});


//===== arrow up =====
$(function() {
    $('#arrow-up').click(function() {
        $('html, body').animate({scrollTop: 0},1000);
        return false;
    })
});

$(function() {
    window.onscroll = function() {
        var arrow = document.getElementById('arrow-up');
        if(window.pageYOffset > 500){
            $(arrow).addClass('active');
        }
        else{
            $(arrow).removeClass('active');
        }
    }
});


//popup_form
$(function() {
    // popup open
    $('.popupOpen').click( function(e){
        e.preventDefault();

        $('.feedback, .layerBox').fadeIn();
        return false;
    });
    // $('.feedback .btnBox').click( function(){
    //     $('.feedback').fadeOut();
    //     $('.success').fadeIn();
    //     return false;
    // });

    // popup close
    $('.layerBox, .success .btnBox, .close_bth').click( function(){
        $('.layerBox, .popupBox').fadeOut();
        return false;
    });
});


//gallery lightbox
$(function() {
    lightbox.option({
      'wrapAround': true,
    });
});


// add class active in price
$('.price__menu--item').click(function(e) {
    e.preventDefault();
    $('.price__menu--item').removeClass('active');
    $(this).addClass('active');
    var priceHeight = $('.price__menu--item.active .price__submenu').height();
    var priceHeightPlus = priceHeight + 50 + 'px';
    var priceMinHeight = $('.price__menu').height();

    $(".price").css({'height' : priceHeightPlus});
    $(".price").css({'min-height' : priceMinHeight});
});

$(function() {
    var priceHeight = $('.price__menu--item.active .price__submenu').height();
    var priceHeightPlus = priceHeight + 50 + 'px';
    var priceMinHeight = $('.price__menu').height();

    $(".price").css({'height' : priceHeightPlus});
    $(".price").css({'min-height' : priceMinHeight});
});


// выравнивание высоты прайса
$(function() {
    var max_col_height = 0;
    $('.price__submenu').each(function(){
        if ($(this).height() > max_col_height) {
            max_col_height = $(this).height();
        }
    });
});


//animated
$(".informblocks__item").animated("fadeInUp", "fadeInUp");
$(".numbers__item").animated("flipInX", "fadeOut");
$(".teeth__item").animated("zoomIn", "fadeOut");
$(".personal-sec__item").animated("fadeInUp", "fadeInUp");
$(".salenews__item").animated("flipInX", "fadeOut");
$(".news__item").animated("zoomIn", "fadeOut");