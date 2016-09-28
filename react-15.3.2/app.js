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
