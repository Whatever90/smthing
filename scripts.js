$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#some-goals").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  })
})
