// tutorial1.js
var model = [
    {
        name: "home",
        description: "My Home. I have lived here for most of my life, moving in during March break of 1997, I have so many cherished memories of this place!",
        key: 1,
        coordinates: {
            lat:  43.220473 ,
            lng:  -79.6473
        }
    }, {
        name: "memphis barbeque",
        description: "<div id='pano'></div>",
        key: 2,
        coordinates: {
            lat: 43.209,
            lng: -79.667752
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
  },

  getModel: function() {
    var modelCopy = [];
    for (var i = 0; i < model.length; i++) {
      modelCopy.push(model[i])
    }
    return modelCopy
  }
};

var mapSettings = {
  names: myController.getNames(),
  center: {
    lat: 43.227,
    lng: -79.719
  },
  zoom:11
};

var modelCopy = myController.getModel();

let map = new google.maps.Map(document.getElementById('map'), mapSettings);

(function populate(modelName) {
  for (let i = 0; i < modelName.length; i++) {
      modelName[i].marker = new google.maps.Marker({
          position: {
              lat: modelName[i].coordinates.lat,
              lng: modelName[i].coordinates.lng
          },
          title: modelName[i].name
      });
    modelName[i].marker.infowindow = new google.maps.InfoWindow({content: modelName[i].description});
    modelName[i].marker.setMap(map);
    modelName[i].marker.addListener('click', function() {
        this.infowindow.open(map, modelName[i].marker);
    });
  }
})(modelCopy);


////REACT/////

var EncompassingComponent = React.createClass({

  getInitialState: function() {
    return {
      names: myController.getModel(),
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

  //search function that filters list of names in the model, changes state, pass the function into the input

  searchMarkers: function() {

    var arr = modelCopy;
    var typedValue = (this.refs.searchText.value).toLowerCase();
    var newArr = arr.filter(function(element) {
      if((element.name).indexOf(typedValue) > -1) {
        return element
      };
    });
    var newStateArray = arr.filter(function(element) {
      if ( (element.name).indexOf(typedValue) > -1 ) {
        return element.name
      }
    });
    this.setState({
      names: newStateArray,
      fuck: newArr
    });

    return newArr

  },

  openMarker: function(i) {
    var mCopy = this.searchMarkers();
    map.setCenter({lat: mCopy[i].coordinates.lat, lng:mCopy[i].coordinates.lng});
    mCopy[i].marker.infowindow.open(map, mCopy[i].marker);
  },

  eachMarker: function(element, i) {
    return (
      <Marker key={i} index={i} openSesame={this.openMarker}>{element.name}</Marker>
    )
  },

  render: function() {
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
