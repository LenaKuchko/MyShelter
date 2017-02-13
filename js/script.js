
// $(window).onload(function initMap() {
//   debugger;
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// });

$(document).ready(function() {
  // debugger;
  console.log(JSON.parse(cats));
  var petCats = JSON.parse(cats);
  // debugger;
  // $('#cat1').append('<div class="col-md-4">' +
  //           '<div class="thumbnail">' +
  //           '<img class="img-responsive" src="cats/Leo.jpg" alt="Leo">' +
  //           '<div class="caption">' +
  //             json[1].Name + '<br>10<br>male' +
  //           '</div>' +
  //           '</div>'
  // );
  // console.log();
  //debugger;
  var catcounter=0;
  for (var i = 0; i < (petCats.length)/3; i++) {
    $('#viewCats').append('<div class="row" id="rowCat'+ i +'"> '+'</div>' );

    if ((i+1)>(petCats.length/3))
    {
      for (var y = 0; y < petCats.length%3; y++) {
        $('#rowCat'+i).append('<div class="col-md-4">' +
                      '<div id="'+ petCats[catcounter].id + '"class="thumbnail"> ' +
                      '<a target="foto" data-toggle="modal" data-target="#fotoModal">'+
                      '<img class="img-responsive" src="cats/' +

                      petCats[catcounter].Name + petCats[catcounter].id +
                      '.jpg" alt="' + petCats[catcounter].Name + '">' +
                      '</a>' +
                      '<div class="caption">' +
                      petCats[catcounter].Name + ', ' + petCats[catcounter].Age +
                      ', ' + petCats[catcounter].Sex + '<br>' +
                      'Favorite food: ' +
                      '</div>' +
                      '</div>' +
                      '</div>'
                    );
         console.log(petCats[catcounter].Name);
         catcounter++;}
    }
    else {
        for (var x = 0; x < 3; x++) {
        $('#rowCat'+i).append('<div class="col-md-4">' +
                      '<div id="'+ petCats[catcounter].id + '"class="thumbnail"> ' +
                      '<a target="foto" data-toggle="modal" data-target="#fotoModal">'+
                      '<img class="img-responsive" src="cats/'
                      + petCats[catcounter].Name + petCats[catcounter].id +
                      '.jpg" alt="' + petCats[catcounter].Name + '">' +
                      '</a>' +
                      '<div class="caption">' +
                      petCats[catcounter].Name + ', ' + petCats[catcounter].Age +
                      ', ' + petCats[catcounter].Sex + '<br>' +
                      'Favorite food: ' +
                      '</div>' +
                      '</div>' +
                      '</div>'
                    );

          console.log(petCats[catcounter].Name);
            catcounter++;}
    }
  }
// fotogallery

$(".thumbnail").click(function(){
  var petCats = JSON.parse(cats);
  console.log("hello");
  var cat=0;
  for (var i = 0; i < petCats.length; i++) {
    if (petCats[i].id==this.id) {
      cat=petCats[i];
        alert(cat.Name);
        break;
    }
  }
var x=0;

  $('#foto').attr("src", cat.Fotos[x]);
  $('#rightButton').click(function(){
    if (x==cat.Fotos.length-1) { debugger; x=-1;}
    x++;
    $('#foto').attr("src", cat.Fotos[x]);
  });


  $('#leftButton').click(function(){
    x--;
    $('#foto').attr("src", cat.Fotos[x]);
    if (x<=0) {
      x=cat.Fotos.length;
    }
  });
})

});


// AIzaSyASAu7TusZgxWIV54AFBip6AziLX66hTEw
