
  var zoo={lat: 45.510037, lng: -122.715846};
  var map;
  var marker;

  //document.getElementById("Oregon zoo").onclick = showLocation("Oregon zoo");

function initMap() {
  // debugger;

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: zoo,
    mapTypeId: 'terrain'
  });

  marker = new google.maps.Marker({
    position: zoo,
    map: map
  });
}
function showLocation(Name){
  debugger;
  var addresses=JSON.parse(address);

  for (var i = 0; i < addresses.length; i++) {
    if (Name==addresses[i].Name) {
      var shelter = new google.maps.LatLng ({ lat: parseFloat(addresses[i].lat), lng: parseFloat(addresses[i].lng)});
      marker.setPosition(shelter);
      marker.setMap(map);
      map.setCenter(shelter);
      break;
    }
  }
  // var shelter = new google.maps.LatLng ({ lat: parseFloat(addresses[i].lat), lng: parseFloat(addresses[i].lng)});
  // marker.setPosition(shelter);
  // marker.setMap(map);
  // map.setCenter(shelter);

}
