
$(document).ready(function() {
  //JQuery Function 1
  $("#down_button").hover(function() {
    //JQuery Function 2
    $(this).css("cursor", "pointer");
  })
})

$(document).ready(function() {
  //JQuery Function 3
  $("#down_button").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  })
})

$(document).ready(function(){
  $(window).scroll(function(){
      //JQuery Function 4
      if ($(this).scrollTop() > 200) {
          //JQuery Function 5
          $('#navbar').fadeIn(500);
      } else {
          //JQuery Function 6
          $('#navbar').fadeOut(500);
      }
  })
})
