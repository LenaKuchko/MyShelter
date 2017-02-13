function initMap() {
  var uluru = {lat: 49.6021346, lng: 34.487199};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
