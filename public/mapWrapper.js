const MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, 'click', function(event) {
    // console.log(event.latLng.lat());
    // console.log(event.latLng.lng());
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.addMarker(position);

  }.bind(this));
}


MapWrapper.prototype.addMarker = function(coords) {
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });
  this.markers.push(marker);
}


MapWrapper.prototype.removeMarkers = function() {
  this.markers.forEach(function(marker){
    marker.setMap(null);
  })
  this.markers = [];
}
