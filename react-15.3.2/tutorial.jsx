// tutorial1.js
var model = {
  markersList: [
    {
      name: "Home",
      description: "My Home. I have lived here for most of my life, moving in during March break of 1997, I have so many cherished memories of this place!",
      coordinates: {
        lat: 43.22047260000001,
        lng: -79.6472996
      }
    },
    {
      name: "Memphis Barbeque",
      description: "One of the best and most popular restaurants in all of Stoney Creek. A classic smokehouse offering some of the finest Barbeque food you could ever ask for",
      coordinates: {
        lat: 43.209,
        lng: -79.666
      }
    }
  ]
};

var octopus = {
  getMarkers: function() {
    model.markersList.map(function(marker) {
      console.log(marker)
    });
  },


  getMarkerNames: function() {
    var names = [];
    model.markersList.map(function(marker) {
      names.push(marker.name);
    });
    return names;
  }
};

console.log(octopus.getMarkerNames());

var Markers = React.createClass({

  render: function() {

    return (
      <div className="markers">
        <ul>{octopus.getMarkerNames()}</ul>
      </div>
    );
  }

});


ReactDOM.render(<Markers />,
document.getElementById('markerList')
);
