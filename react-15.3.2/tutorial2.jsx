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
        description: "<div id='pano'></div>",
        key: 2,
        coordinates: {
            lat: 43.209,
            lng: -79.666
        }
    }
];

var myController = {

  getNames: function() {
    var names = [];
    for (let i = 0; i < model.length; i++) {
      names.push((model[i].name).toLowerCase());
    }
    return names
  }
}

////REACT/////

var EncompassingComponent = React.createClass({

  getInitialState: function() {
    return {
      names: myController.getNames(),
      mapSettings: {
      center: {
        lat: 43.227,
        lng: -79.719
      },
      zoom:11
    },
    streetCoords: null,
    isOpen: false,
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
        model[i].marker.isOpen = false;
        model[i].marker.addListener('click', function() {
            this.infowindow.isOpen = true;
            this.infowindow.open(map, model[i].marker);
        });
      }
    let view = new google.maps.StreetViewPanorama(document.getElementById('view'), {
      streetViewControl: false,
      position: this.state.streetCoords,
      disableDefaultUI: true,
      pov: {
        heading: 180,
        pitch: 0
      }
    });
    view.addListener('pano_changed', function() {
      console.log(view.getPano());
    });
    map.setStreetView(view);
  },

  openMarker: function(i) {
    // this.setState({
    //   mapSettings: {
    //     center: {
    //       lat: model[i].coordinates.lat,
    //       lng: model[i].coordinates.lng
    //     },
    //     zoom: 12
    //   },
    //   streetCoords:  {
    //     lat: model[i].coordinates.lat,
    //     lng: model[i].coordinates.lng
    //   },
    //   isOpen: true
    // });
    //
    // if (this.state.isOpen) {
    //   model[i].marker.infowindow.open(map, model[i].marker);
    // }
  },

  eachMarker: function(name, i) {
    return (
      <Marker key={i} index={i} openSesame={this.openMarker}>{name}</Marker>
    )
  },

  //search function that filters list of names in the model, changes state, pass the function into the input

  searchMarkers: function() {
    var arr = myController.getNames();
    var typedValue = (this.refs.searchText.value).toLowerCase();
    var newArr = arr.filter(function(name) {
      return name.indexOf(typedValue) > -1
    });
    this.setState({
      names: newArr
    })
  },

  //main component will have the other componentes inside of it
  render: function() {
    this.displayMarkers();
    return (
      <div>
        <PageTitle />
        <div className="markers">
          <input ref="searchText" type="search" className="form-control" placeholder="Search" onChange={this.searchMarkers}/>
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
    this.props.openSesame(this.props.index);
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
