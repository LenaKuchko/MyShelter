

$(document).ready(function() {
  // debugger;
  console.log("Hello")
  var i = 1;
  console.log(JSON.parse(cats));
  var json = JSON.parse(cats)
  // debugger;
  $('#cat1').append('<div class="col-md-4">' +
            '<div class="thumbnail">' +
            '<img class="img-responsive" src="cats/Leo.jpg" alt="Leo">' +
            '<div class="caption">' +
              json[1].Name + '<br>10<br>male' +
            '</div>' +
            '</div>'
  );
  console.log();
});
