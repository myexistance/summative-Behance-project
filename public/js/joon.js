$(document).ready(function() {


var api = 'dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM';
var designer1 = 'rafaalvarez';
var designer2 = 'rafaalvarez';
var designer2 = 'rafaalvarez';
var $container = $("#BehanceProject");
var $covers = $("#ProjectCovers");


  function success(data) {
    for (var i = 0; i < data.projects.length; i++) {
      var project = data.projects[i];
      insertProject(project);
    }
  }

  function insertProject(projectData) {
    // $covers.append('<img src=' + projectData.covers['404'] + ' />');
    $container.append('<div class="project__item">'+'<img src="https:\/\/mir-s3-cdn-cf.behance.net\/projects\/404\/1769a123786915.Y3JvcCwyNDAxLDE4NzcsMjIzLDA.jpg" alt="">'+'</div>');
    $container.append('<div class="project__item">'+projectData.name+'</div>');
    $container.append('<div class="project__item">'+projectData.fields+'</div>');

  }

  $.ajax({
    dataType: "jsonp",
    url: "https://www.behance.net/v2/users/matiascorea/projects?api_key=dSoSYYcQQTsMHJ9O5hWkN6gns4aV5gOM",
    success: success
  });
});
