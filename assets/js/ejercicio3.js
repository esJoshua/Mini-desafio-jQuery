$(document).ready(function () {
  $(".h-16").mouseover(function () {
    $("li").filter(":even").css("background-color", "orange");
    $("li").filter(":odd").css("background-color", "green");
  });
  $(".h-16").mouseout(function () {
    $("li").css("background-color", "lightgray");
  });
});
