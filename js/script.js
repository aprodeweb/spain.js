/* Author:
 Israel Alcázar
 */

jQuery(function ($) {
  $(".tweet").tweet({
    count:3,
    query:"#spainjs OR from:@spainjs",
    loading_text:"searching twitter...",
    template:'<span class="name">@{screen_name}</span><span class="tweet">{text}</span><span class="time">{time}</span>'
  });

  $('.js-more', '.jobs').bind('click', function (e) {
    e.preventDefault();
    $(e.target).parent().toggleClass('less');
  })
});







