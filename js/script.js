

$(document).ready(function() {
  // debugger;
  console.log(JSON.parse(cats));
  var petCats = JSON.parse(cats)
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
  debugger;
  var catcounter=0;
  for (var i = 0; i < (petCats.length)/3; i++) {
    $('#viewCats').append('<div class="row" id="rowCat'+ i +'"> '+'</div>' );

    if ((i+1)>(petCats.length/3))
    {
      for (var y = 0; y < petCats.length%3; y++) {
        $('#rowCat'+i).append('<div class="col-md-4">' +
                      '<div class="thumbnail"> ' +
                      '<a data-toggle="modal" data-target="#myModal">'+
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
                      '<div class="thumbnail"> ' +
                      '<img class="img-responsive" src="cats/'
                      + petCats[catcounter].Name + petCats[catcounter].id +
                      '.jpg" alt="' + petCats[catcounter].Name + '">' +
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
})
