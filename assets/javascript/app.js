// Initialize Firebase
var config = {
  apiKey: "AIzaSyAbF3nKAaCZqR4M16UtQapLikADKBnGsPs",
  authDomain: "upenn-project-1-2f463.firebaseapp.com",
  databaseURL: "https://upenn-project-1-2f463.firebaseio.com",
  projectId: "upenn-project-1-2f463",
  storageBucket: "upenn-project-1-2f463.appspot.com",
  messagingSenderId: "43611725747"
};

firebase.initializeApp(config);

//Retrieve News API on Search
$("#searchButton").on("click", function (event) {
  event.preventDefault();
  $("#news").text("");
  var input = $("#search-input").val();
  var queryURL = "https://newsapi.org/v2/everything?q=" + input + '&apiKey=162726561a464b569d09046f2862e7f1';
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var result = response.articles;

    for (var i = 0; i < result.length; i++) {
      // var titleDiv = $("<div>");
      // var imgTag = $("<img>")
      var aTag = $("<a>").text(result[i].title);
      var pTag = $("<p>").text(result[i].content);

      aTag.attr("href", result[i].url);

      $("#news").append(aTag)
      $("#news").append(pTag)

      // console.log(result[i].title)
      // console.log(result[i].content)

    }
    // console.log(queryURL)

  });
});

