$(document).ready(function() {


var api = '';
var designer1 = 'rafaalvarez';
var designer2 = 'rafaalvarez';
var designer2 = 'rafaalvarez';
var $container = $("#BehanceProject");



  function success(data) {
    for (var i = 0; i < data.projects.length; i++) {
      var project = data.projects[i];
      insertProject(project);
    }
  }

  function insertProject(projectData) {
    // $covers.append('<img src=' + projectData.covers['404'] + ' />');
    $container.append('<div class="project__item">'+projectData.name+'</div>');
    $container.append('<div class="project__item">'+projectData.fields+'</div>');
    $container.append('<div class="project__item">' + '<img src= "' + projectData.covers[404] + '">')

  }

  $.ajax({
    dataType: "jsonp",
    url: "https://www.behance.net/v2/users/matiascorea/projects?api_key=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM",
    success: success
  });
});
