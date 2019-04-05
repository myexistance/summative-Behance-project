$(document).ready(function() {


var api = 'dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM';
var designer1 = 'designer';
var designer2 = 'rafaalvarez';
var designer3 = 'rafaalvarez';
var container = $("#BehanceProject");



  function success(data) {

    console.log(data)
    // for (var i = 0; i < 3; i++) {
    //   console.log(data.users[i])
    //   for (var j = 0; j < 3; j++) {
    //     var project = data.users[i].images;
    //      console.log(project)
    //      insertProject(project);
    //   }
    //
    // }

  }

  function insertProject(projectData) {
    // container.append('<img src=' + projectData.covers['404'] + ' />');
    container.append('<div class="project__item">'+projectData.name+'</div>');
    container.append('<div class="project__item">'+projectData.fields+'</div>');
    container.append('<div class="project__item">' + '<img src= "' + projectData.users.images[230] + '">')

  }
var user1= "peter";
var user2="luca";
var user3="alex";
for (var i=1; i<4;i++){
  console.log(i);
  user=user[i]
  console.log(user);
  var url='https://api.behance.net/v2/users?q="+user+"&client_id=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM';
  console.log(url);
  $.ajax({
    url: url,
    dataType: "jsonp",
    type: "GET",
    success: function(myData){

      console.log(myData);
    }
  });
}
});
