var map;
function initMap() {

  this.model = {
    center: {lat: 43.227, lng: -79.719}
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 43.227, lng: -79.719},
    zoom: 13,
    styles: [
      {
        featureType: 'all',
        stylers: [
          { saturation: -10 },
          { invert_lightness: true },
          { gamma: 1.2 }

        ]
      },
      {
        featureType: 'landscape.natural',
        stylers: [
          { saturation: -80 },
          { lightness: -50}
        ]
      },
      {
        featureType: 'water',
        stylers: [
          { saturation: -10 },
          { lightness: -60}
        ]
      },

      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          { color: "#4b4b4b" }

        ]
      },
      {
        featureType: 'poi.park',
        stylers: [
          { saturation: -90 }
        ]
      }
    ]
  });

  var infowindow = new google.maps.InfoWindow({content: 'Memphis BBQ'
});

  var marker = new google.maps.Marker({
    position: {lat:43.209, lng: -79.666 },
    map: map,
    title: 'Memphis BBQ'
  });

  var infowindowH = new google.maps.InfoWindow({content: 'Home'
});

  var markerTwo = new google.maps.Marker(
    {
      position: {lat:43.22047260000001, lng: -79.6472996 },
      map: map,
      title: 'Home'
    }
  );

  marker.setMap(map);
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  markerTwo.setMap(map);
  markerTwo.addListener('click', function() {
    infowindowH.open(map, markerTwo);
  });
}
