function initMap() {
  var latLng = {lat: 59.93857, lng: 30.323};
  var mapCenter = {lat: 59.9388, lng: 30.323}
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 16,
    center: mapCenter,
    mapTypeControl: false,
    streetViewControl: false,
    scrollwheel: false,
});

var image = "img/map-marker.png"
var marker = new google.maps.Marker({
  position: latLng,
  map: map,
  icon: image,
});
}
