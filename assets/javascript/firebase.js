//Initialize Firebase
var config = {
    apiKey: "AIzaSyAltHOPXSSGBL2TCstCTDwakVwDwRMlC5A",
    authDomain: "project-1-1e533.firebaseapp.com",
    databaseURL: "https://project-1-1e533.firebaseio.com",
    projectId: "project-1-1e533",
    storageBucket: "project-1-1e533.appspot.com",
    messagingSenderId: "877020008013"
  };

firebase.initializeApp(config);

var database = firebase.database();
var user = "anonymous";

$(document).on("click", "#login", function(){
    user = $("#user-name").val();
  
    $("#user-name").val('');
    console.log(user);
    
  })

$('#comment').on("click", function(event){

    event.preventDefault();
    if($('#user-comment').val() === ""){
        return;
    } else {
    var comment = $('#user-comment').val().trim();
    var date = new Date();
    var mill = date.getTime(); 
    // console.log(date);
    
    var displayComment = {
        comment: comment,
        timestamp: mill,
        username: user
    };
    // console.log(timestamp);
    
    database.ref().push(displayComment);

    $("#user-comment").val('');
}
});

database.ref().on("value", function (snapshot) {

    // var sv = snapshot.val();
    // console.log(sv);
    // comment = sv.comment;
    // timestamp = sv.timestamp;
    // console.log(sv.timestamp);
    
    $('#comment-display').empty();
    snapshot.forEach(function(childSnapshot) {
        // console.log(childSnapshot.val())
        var comment = childSnapshot.val().comment;
        var timestamp = childSnapshot.val().timestamp;
        var username = childSnapshot.val().username;
        // console.log(timestamp);
        // console.log(ago(timestamp));
        // console.log(jQuery.timeago(timestamp));
        
        var commentSpan = $('<p>' + username + ': ' + comment + '  ' + '<small class="timeago">'+ ago(timestamp) +'</small>' +'</p>')
        $("#comment-display").prepend(commentSpan);
    })

});