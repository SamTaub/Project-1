  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAbF3nKAaCZqR4M16UtQapLikADKBnGsPs",
  //   authDomain: "upenn-project-1-2f463.firebaseapp.com",
  //   databaseURL: "https://upenn-project-1-2f463.firebaseio.com",
  //   projectId: "upenn-project-1-2f463",
  //   storageBucket: "upenn-project-1-2f463.appspot.com",
  //   messagingSenderId: "43611725747"
  // };
  // firebase.initializeApp(config);

  $("#searchButton").on("click", function(event) {
    event.preventDefault();
    $("#news").text("");
    var input = $("#playerSearch").val();
    
    var queryURL = "https://newsapi.org/v2/everything?q=" + input + '&apiKey=162726561a464b569d09046f2862e7f1';
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      
      var result = response.articles;
      
      for (var i = 0; i < 10; i++) {

          // var titleDiv = $("<div>");

          // var imgTag = $("<img>")

          var trTag = $("<tr>");

          var rowTag = $("<th>").text(i+1);

          var titleTag = $("<td>").text(result[i].title);
          var contentTag = $("<td>").text(result[i].content);
          
          titleTag.attr("href", result[i].url);
          
          // trTag.text(rowTag + titleTag + contentTag)

          $("tbody").append(trTag)

          $("tbody").append(rowTag)
          $("tbody").append(titleTag)
          $("tbody").append(contentTag)
          

          // console.log(result[i].title)
          // console.log(result[i].content)
          
      }
            
    });//end ajax
  });//end onClick