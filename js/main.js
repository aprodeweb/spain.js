/**
 * @fileOverview Javascript Main file
 * @author Javier Brea
 */
define(['jquery', 'bootstrap', 'smoothScroll'], function($) {
  'use strict';

  var fixMenu, scrollLinks, readMore;

  //"Offset height" changes when the window is resized and does not work properly, but providing a function to "bootstrap affix" to calculate the offset as the window changes makes the menu blinks all time
  fixMenu = function() {
    var menu = $('nav.menu');
    menu.parent().css('min-height', menu.height());

    menu.affix({
      offset: {
        top: menu.offset().top
      }
    });

    menu = null;
  };

  //Same page links use smooth scroll
  scrollLinks = function() {
    var links = $('a.samepage');

    links.smoothScroll({
      offset: -40,
      easing: 'swing',
      speed: 300
    });

    links = null;
  };

  /* Extend Job Board */
  readMore = function() {
   $('.js-more', '#job_board').bind('click', function (e) {
      e.preventDefault();
      $(e.target).unbind('click').hide().parent().parent().find('.more').show();
    });
  };

  //Launch
  $(function() {

    fixMenu();
    scrollLinks();
    readMore();
  });

});