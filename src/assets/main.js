$(function() {
  // https://www.codeschool.com/projects/use-jquery-to-fetch-and-show-code-school-badges-using-ajax/build
  // https://github.com/codeschool/jQueryBadgesProject/wiki/How-to-get-your-Report-Card-URL
  // https://www.codeschool.com/users/3285873.json
  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/3285873.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      var c = document.createDocumentFragment();
      response.courses.completed.forEach(function (value, index) {
	      var e = document.createElement("div");
          e.className = "course";
          e.innerHTML = "<h3>" + value.title + "</h3><img src='" + value.badge + "'></img><a href='" + value.url + "' class='btn btn-primary'>See Course</a>";
          c.appendChild(e);
      });
      document.getElementById("badges").appendChild(c);
    }
  });
});
