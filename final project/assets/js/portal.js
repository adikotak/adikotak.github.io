$(document).ready(function() {
  $("#go-button").click(function() {
    $(tablelist).css("visibility", "visible");
  })
})

$(document).ready(function() {
  $("#clear-button").click(function() {
    $('#collge_picker').prop('selectedIndex',0);
    $('#class_picker').prop('selectedIndex',0);
    $(tablelist).css("visibility", "hidden");
  })
})

// if ($("#college_picker :selected").val() == "" || $("#class_picker :selected").val() == "" ) {
//
// } else {
//   $("#go-button").click(function() {
//     $(tablelist).css("visibility", "visible");
//   })
// }
