//Initialize Firebase
var config = {
  apiKey: "AIzaSyAbF3nKAaCZqR4M16UtQapLikADKBnGsPs",
  authDomain: "upenn-project-1-2f463.firebaseapp.com",
  databaseURL: "https://upenn-project-1-2f463.firebaseio.com",
  projectId: "upenn-project-1-2f463",
  storageBucket: "upenn-project-1-2f463.appspot.com",
  messagingSenderId: "43611725747"
};

firebase.initializeApp(config);

var database = firebase.database();

$('#comment').on("click", function(){

    event.preventDefault();

    var comment = $('#user-comment').val().trim();

    var displayComment = {
        comment: comment
    };

    database.ref().push(displayComment);

    $("#user-comment").val('');

});

database.ref().on("value", function (snapshot) {

    var sv = snapshot.val();
    console.log(sv);
    comment = sv.comment;

    //var appendComment = $('#comment-display').text(comment);


    // for (var property in sv){
    //     if (sv.hasOwnProperty(property)){
    //         console.log(property.val())
    //         var comment = $('<span>' + property.comment + '</span>')
    //      $("#comment-display").prepend(comment);
    //     }
    // };

    snapshot.forEach(function(childSnapshot) {
        console.log(childSnapshot.val())
        var comment = childSnapshot.val().comment;
        var commentSpan = $('<p>' + comment + '</p>')
        $("#comment-display").prepend(commentSpan);
    })


});