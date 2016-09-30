/*
How the Map Will Be Separated:


1. Model

  - holds data for markers

    mapCenter: {longitude:..., latitude:...}

    markers: [
    {name: 'Home',
     longitude: 70.456,
     latitude: -75.123,
     description: "blah blah blah"
   },
   {...},
   {...}
 ];

 2. Controller/Octopus
  - manipulates the data how we want through methods

  centerMap: function()

  getMarkers: function() {
  markers.map(function(marker) {
  return marker
})
},

  getMarkerNames: function() {
  model.markers.map(function(marker) {
  return marker.name
});
},

  getMarkerCords: ...,

3. View

- handles user interaction/experience
- displays list of markers in markersList component
- displays search bar at top which filters markers
- when user clicks on map marker, shows description (this is done by map.js)








*/


var List = React.createClass({
  render: function() {
    return (
      <div>
      <ul className="markers">
        <li>Home</li>
        <li>Memphis Barbeque</li>
        <li>Other</li>
      </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <List />, document.getElementById('markerList')
);




































// var app = app || {};
//
// (function() {
//
//   var Model = app.model;
//   var Controller = app.controller;
//
//   app.model = {
//     markerList: [{
//           name: 'BBQ'
//         },
//         {
//           name: 'Home'
//         },
//         {
//           name: 'Barbershop'
//         }]
//   };
//
//   Controller = {
//     getNames: function() {
//       var names = "<ul>";
//       for (var i = 0; i < app.model.markerList.length; i++) {
//         names += "'<li>" + app.model.markerList.name[i] + "</li>'";
//       }
//       return names += "</ul>";
//
//     },
//     saveNames: function() {
//       console.log(Controller.getNames());
//     }
//   };
//
//   Controller.saveNames();
//
//
//
// }());


// var createMap = {
//   map: function() {
//     this.model = {
//       center: {lat: 43.227, lng: -79.719}
//     };
//
// var middleMapSettings = {
//   center: {lat: 43.227, lng: -79.719},
//   zoom: 13,
//   styles: [
//     {
//       featureType: 'all',
//       stylers: [
//         { saturation: -10 },
//         { invert_lightness: true },
//         { gamma: 1.2 }
//
//       ]
//     },
//     {
//       featureType: 'landscape.natural',
//       stylers: [
//         { saturation: -80 },
//         { lightness: -50}
//       ]
//     },
//     {
//       featureType: 'water',
//       stylers: [
//         { saturation: -10 },
//         { lightness: -60}
//       ]
//     },
//
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry',
//       stylers: [
//         { color: "#4b4b4b" }
//
//       ]
//     },
//     {
//       featureType: 'poi.park',
//       stylers: [
//         { saturation: -90 }
//       ]
//     }
//   ]
// };
//
//     map = new google.maps.Map(document.getElementById('map'), middleMapSettings);
//
//
//     var infowindow = new google.maps.InfoWindow({content: 'Memphis BBQ'
//   });
//
//     var marker = new google.maps.Marker({
//       position: {lat:43.209, lng: -79.666 },
//       map: map,
//       title: 'Memphis BBQ'
//     });
//
//     var infowindowH = new google.maps.InfoWindow({content: 'Home'
//   });
//
//     var markerTwo = new google.maps.Marker(
//       {
//         position: {lat:43.22047260000001, lng: -79.6472996 },
//         map: map,
//         title: 'Home'
//       }
//     );
//
//     marker.setMap(map);
//     marker.addListener('click', function() {
//       infowindow.open(map, marker);
//     });
//
//     markerTwo.setMap(map);
//     markerTwo.addListener('click', function() {
//       infowindowH.open(map, markerTwo);
//     });
//   }
// };
