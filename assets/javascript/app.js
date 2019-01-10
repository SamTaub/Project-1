

// search news api when player is typed in search bar
$("#searchButton").on("click", function (event) {
  event.preventDefault();
  if($("#playerSearch").val() === ""){
    return;
  } else {
  $("tbody").empty();
  var input = $("#playerSearch").val();
  newsApi(input);
  tmApi(input);
  $(".ticketmaster").hide();
  $(".newsroom").removeClass("col-9");
  $("#playerSearch").val("");
  }
});

// search news and ticket master api when team logo is clicked
$(document).on("click", ".logos", function () {
  $("tbody").empty();
  var input = $(this).attr("data-name");
  $(".newsroom").addClass("col-9");
  $(".ticketmaster").show();
  newsApi(input);
  $("#tmTable").css("background-color", $(this).attr("data-color"));
  tmApi(input);
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
      var rowTag = $("<td>");
      var titleTag = $("<td>").text(result[i].title);
      var content = $("<a>").attr({"href": result[i].url, "target": "_blank", class : "newsContent"});
      var contentTag = $("<td>");
      var imgTag = $("<img>").attr({"src": result[i].urlToImage, "class": "ImageStlying"});
      
      // var imgTag = $("img").attr("src",result[i].urlToImage);
      // var spanTag = $("span").append(imgTag);


      content.text(result[i].content);
      // content.append(spanTag)
      rowTag.append(imgTag);
      contentTag.append(content);

      $("#newsTable").append(trTag)
      $("#newsTable").append(rowTag)
      $("#newsTable").append(titleTag)
      $("#newsTable").append(contentTag)
    }
  });
}

// This function grabs ticket info taking in a input
function tmApi(input){
  var apiKey = "fHVIkb41Pw4obhdgNbHPq4igfwZ5hAKZ"
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + apiKey + "&keyword=" + input;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var result = response._embedded;
    // console.log(response);
    for (var i = 0; i < 10; i++) {
      var trTag = $("<tr>");
      var titleTag = $("<td>").text(result.events[i].name);
      var ticketTag = $("<td>").html('<a target="_blank" href="'+ result.events[i].url +'"><i class="fas fa-5x fa-ticket-alt"></i></a>');
      // console.log(result.events[i]);
      trTag.append(titleTag, ticketTag);
      $("#tmTable").append(trTag);
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
