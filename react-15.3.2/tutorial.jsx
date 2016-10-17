// tutorial1.js
var model = [
    {
        name: "Home",
        description: "My Home. I have lived here for most of my life, moving in during March break of 1997, I have so many cherished memories of this place!",
        key: 1,
        coordinates: {
            lat: 43.22047260000001,
            lng: -79.6472996
        }
    }, {
        name: "Memphis Barbeque",
        description: "One of the best and most popular restaurants in all of Stoney Creek. A classic smokehouse offering some of the finest Barbeque food you could ever ask for",
        key: 2,
        coordinates: {
            lat: 43.209,
            lng: -79.666
        }
    }
];

////REACT/////

var EncompassingComponent = React.createClass({

  getInitialState: function() {
    return {
      names: [
        "Home", "Memphis BBQ"
      ],
      mapSettings: {
      center: {
        lat: 43.227,
        lng: -79.719
      },
      zoom:11
    }
  }
  },

  displayMarkers: function() {
    let map = new google.maps.Map(document.getElementById('map'), this.state.mapSettings);
      for (let i = 0; i < model.length; i++) {
          model[i].marker = new google.maps.Marker({
              position: {
                  lat: model[i].coordinates.lat,
                  lng: model[i].coordinates.lng
              },
              title: model[i].name
          });
        model[i].marker.infowindow = new google.maps.InfoWindow({content: model[i].description});
        model[i].marker.setMap(map);
        model[i].marker.addListener('click', function() {
            this.infowindow.open(map, model[i].marker);
        })
      }


  },

  openMarker: function(i) {
      this.setState({
        mapSettings: {
          center: {
            lat: model[i].coordinates.lat,
            lng: model[i].coordinates.lng
          },
          zoom: 16
        }
      });
  },

  eachMarker: function(name, i) {
    return (
      <Marker key={i} index={i} openSesame={this.openMarker}>{name}</Marker>
    )
  },

  //main component will have the other componentes inside of it
  render: function() {
    this.displayMarkers();
    return (
      <div>
        <PageTitle />
        <div className="markers">
          {
            this.state.names.map(this.eachMarker)
          }
        </div>
      </div>
    )
  }
});

var PageTitle = React.createClass({
  render: function() {
    return (
      <div className="title">
        <h1>Dog Parks in the Golden Horshoe</h1>
        <h3>"Make way for a scene"</h3>
      </div>

    )
  }
});



var Marker = React.createClass({

  whatToDo: function() {
    this.props.openSesame(this.props.index)
  },

  render: function() {
    return(
      <h3 onClick={this.whatToDo}>{this.props.children}</h3>
    )
  }
});

ReactDOM.render(
  <EncompassingComponent />, document.getElementById('main')
);
