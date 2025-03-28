/*
===============================================================
  * Lazy Load XT 1.1.0  https://github.com/ressio/lazy-load-xt
   * License: MIT
 =============================================================================
 */

 !function(a,b,c,d){function e(a,b){return a[b]===d?t[b]:a[b]}function f(){var a=b.pageYOffset;return a===d?r.scrollTop:a}function g(a,b){var c=t["on"+a];c&&(w(c)?c.call(b[0]):(c.addClass&&b.addClass(c.addClass),c.removeClass&&b.removeClass(c.removeClass))),b.trigger("lazy"+a,[b]),k()}function h(b){g(b.type,a(this).off(p,h))}function i(c){if(z.length){c=c||t.forceLoad,A=1/0;var d,e,i=f(),j=b.innerHeight||r.clientHeight,k=b.innerWidth||r.clientWidth;for(d=0,e=z.length;e>d;d++){var l,m=z[d],q=m[0],s=m[n],u=!1,v=c||y(q,o)<0;if(a.contains(r,q)){if(c||!s.visibleOnly||q.offsetWidth||q.offsetHeight){if(!v){var x=q.getBoundingClientRect(),B=s.edgeX,C=s.edgeY;l=x.top+i-C-j,v=i>=l&&x.bottom>-C&&x.left<=k+B&&x.right>-B}if(v){m.on(p,h),g("show",m);var D=s.srcAttr,E=w(D)?D(m):q.getAttribute(D);E&&(q.src=E),u=!0}else A>l&&(A=l)}}else u=!0;u&&(y(q,o,0),z.splice(d--,1),e--)}e||g("complete",a(r))}}function j(){B>1?(B=1,i(),setTimeout(j,t.throttle)):B=0}function k(a){z.length&&(a&&"scroll"===a.type&&a.currentTarget===b&&A>=f()||(B||setTimeout(j,0),B=2))}function l(){v.lazyLoadXT()}function m(){i(!0)}var n="lazyLoadXT",o="lazied",p="load error",q="lazy-hidden",r=c.documentElement||c.body,s=b.onscroll===d||!!b.operamini||!r.getBoundingClientRect,t={autoInit:!0,selector:"img[data-src]",blankImage:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",throttle:99,forceLoad:s,loadEvent:"pageshow",updateEvent:"load orientationchange resize scroll touchmove focus",forceEvent:"lazyloadall",oninit:{removeClass:"lazy"},onshow:{addClass:q},onload:{removeClass:q,addClass:"lazy-loaded"},onerror:{removeClass:q},checkDuplicates:!0},u={srcAttr:"data-src",edgeX:0,edgeY:0,visibleOnly:!0},v=a(b),w=a.isFunction,x=a.extend,y=a.data||function(b,c){return a(b).data(c)},z=[],A=0,B=0;a[n]=x(t,u,a[n]),a.fn[n]=function(c){c=c||{};var d,f=e(c,"blankImage"),h=e(c,"checkDuplicates"),i=e(c,"scrollContainer"),j=e(c,"show"),l={};a(i).on("scroll",k);for(d in u)l[d]=e(c,d);return this.each(function(d,e){if(e===b)a(t.selector).lazyLoadXT(c);else{var i=h&&y(e,o),m=a(e).data(o,j?-1:1);if(i)return void k();f&&"IMG"===e.tagName&&!e.src&&(e.src=f),m[n]=x({},l),g("init",m),z.push(m),k()}})},a(c).ready(function(){g("start",v),v.on(t.updateEvent,k).on(t.forceEvent,m),a(c).on(t.updateEvent,k),t.autoInit&&(v.on(t.loadEvent,l),l())})}(window.jQuery||window.Zepto||window.$,window,document);


jQuery(document).ready(function ($) {

// добавляем lazyload к миниатюрам
    $.extend($.lazyLoadXT, {
      edgeY: 50,
      srcAttr: 'data-src'
    });
 

  // Мобильное меню
  var $trigger = $(".mobile-menu-btn, .mobile-nav-panel__close, .mobile-overlay");
  $trigger.on("click", function () {
    var body = $(".body");
    $trigger.toggleClass("is-active");
    $('.mobile-overlay').toggleClass("is-open");
    $('.mobile-nav-panel').toggleClass("is-open");
    $(body).toggleClass("disable-scroll");
  });


  // Дочерние пункты  в мобильном меню
  $('.mobile-nav .sub-menu').parent().click(function (e) {
    $(this).toggleClass('reverse');
    var submenu = $(this).children('.sub-menu');
    if ($(submenu).is(':hidden')) {
      $(submenu).slideToggle();
    } else {
      $(submenu).slideToggle();
    }
    e.stopPropagation();
  });

 
  /* копируем промокод и выводим уведомление */
  $('.promo-block__btn').click(function () {
    let text = $(this).prev().data('coupon');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
    $(this).addClass('has-clicked');
    $(this).text('Cкопировано!');
  });


  $(function () {
    // спойлер для рубрик
    $('.home-сat-toggle').click(function () {
      var list = $(".home-сat-list");
      $(list).toggleClass("is-shown");
      $(this).toggleClass("is-open");
      $(this).text($(this).text() == 'Скрыть рубрики' ? 'Все рубрики' : 'Скрыть рубрики');
    });
  });


  // Кнопка вверх - появление
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 200) {
        $(".back-to-top").addClass("is-active");
      } else {
        $(".back-to-top").removeClass("is-active");
      }
    });


    // Кнопка вверх - перемещение
    $(".back-to-top").click(function () {
      $('html, body').animate({ scrollTop: 0 }, 'slow');
      return false;
    });
  });


  // Поиск по сайту
  var $btn = $(".site-search__btn, .search-overlay, .search-panel__close");
  $btn.on("click", function () {
    var body = $(".body");
    $btn.toggleClass("is-active");
    $('.search-overlay').toggleClass("is-shown");
    $('.search-panel').toggleClass("is-open");
    $(body).toggleClass("disable-scroll");
  });


  // тоггл  для содержания
  $('.table-content__header').click(function (e) {
    $(this).toggleClass('is-up');
    $('.table-content__list, .table-content__numlist').slideToggle();
  });


  // скроллинг на заголовки содержания
  $('.table-content__link').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 170 }, 700);
  });


  $(function () {
    // спойлер для комментариев
    $('.commnts__header').click(function () {
      $(this).toggleClass("is-opened");
      $('.commnts__header span').text($('.commnts__header span').text() == 'Скрыть комментарии' ? 'Оставить свой комментарий' : 'Скрыть комментарии');
      $('.comments__content').slideToggle();
    });
  });


  // Поставить / снять чекбокс в форме отправки сообщений и комментариях
  $(function () {
    var chekBox = $('.form-checkbox__input');
    var subBtn = $('.comment-form .submit');
    var body = $('.body');
    $(subBtn).attr('disabled', 'true');

    // Отключаем блокировку кнопки для залогиненного юзера
    if ($(body).hasClass("logged-in")) {
      $(subBtn).removeAttr('disabled');
    }

    $(chekBox).click(function () {
      if ($(chekBox).is(':checked')) {
        $(subBtn).removeAttr('disabled');
      } else {
        $(subBtn).attr('disabled', 'true');
      }
    });
  });


  $(function () {
    $('.comment-icon').click(function () {
      $('.commnts__header').toggleClass("is-opened");
      $('.commnts__header span').text($('.commnts__header span').text() == 'Скрыть комментарии' ? 'Оставить свой комментарий' : 'Скрыть комментарии');
      $('.comments__content').slideToggle();

      var destination = $("#comments");
        $('html,body').animate({
            scrollTop: destination.offset().top
        }, 700, "linear");
       
    });
  });

  $(function () {
    $('.move-to-bottom-icon').click(function () {
      var destination = $("#content");
        $('html,body').animate({
            scrollTop: destination.offset().top - 20
        }, 700, "linear");
       
    });
  });

});
