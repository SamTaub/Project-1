

// search news api when player is typed in search bar
$("#searchButton").on("click", function (event) {
  event.preventDefault();
  $("tbody").empty();
  var input = $("#playerSearch").val();
  newsApi(input);
  $("#playerSearch").val("");
});


$(".logos").on("click", function () {
  $("tbody").empty();
  var input = $(this).attr("data-name")
  newsApi(input);
});

// This function grabs news API after taking in a input
function newsApi(input){
  var queryURL = "https://newsapi.org/v2/everything?q=" + input + '&apiKey=162726561a464b569d09046f2862e7f1';

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var result = response.articles;

    for (var i = 0; i < 10; i++) {
      var trTag = $("<tr>");
      var rowTag = $("<th>").text(i + 1);
      var titleTag = $("<td>").text(result[i].title);
      var contentTag = $("<td>").text(result[i].content);

      titleTag.attr("href", result[i].url);

      $("tbody").append(trTag)
      $("tbody").append(rowTag)
      $("tbody").append(titleTag)
      $("tbody").append(contentTag)
    }
  });
}

// hover effect over logos
$(".logos").mouseover(function () {
  $(this).css("transition", "ease 0s");
  $(this).css("border-color", $(this).attr("data-color"));
  $(this).mouseout(function () {
    $(this).css("border-color", "white")
  });
});

// automatic NBA Teams scrolls
setInterval(function(){
  $(".logos").css("transition", "ease 10s")
  $(".logos").css("transform", "translate(-770px, 0px)")
}, 10000)
setInterval(function(){
  $(".logos").css("transition", "ease 10s")
  $(".logos").css("transform", "translate(30px, 0px)")
}, 20000)
