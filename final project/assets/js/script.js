$(document).ready(function() {
  $("#down_button").hover(function() {
    $(this).css("cursor", "pointer");
  })
})

$(document).ready(function() {
  $("#down_button").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  })
})

$(document).ready(function(){
  $(window).scroll(function(){
      if ($(this).scrollTop() > 200) {
          $('#navbar').fadeIn(500);
      } else {
          $('#navbar').fadeOut(500);
      }
  })
})
