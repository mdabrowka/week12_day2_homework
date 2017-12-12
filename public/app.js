const initialize = function() {
  const center = {
  lat: 55.947962,
  lng: -3.20195
};

  const container = document.querySelector('#main-map');
  const mainMap = new MapWrapper(container, center, 18);

  mainMap.addClickEvent();

  mainMap.addMarker(center);


const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', mainMap.removeMarkers.bind(mainMap));
}

document.addEventListener('DOMContentLoaded', initialize);
