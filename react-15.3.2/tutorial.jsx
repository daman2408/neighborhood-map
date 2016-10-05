// tutorial1.js
var model = [
    {
        name: "Home",
        description: "My Home. I have lived here for most of my life, moving in during March break of 1997, I have so many cherished memories of this place!",
        coordinates: {
            lat: 43.22047260000001,
            lng: -79.6472996
        }
    }, {
        name: "Memphis Barbeque",
        description: "One of the best and most popular restaurants in all of Stoney Creek. A classic smokehouse offering some of the finest Barbeque food you could ever ask for",
        coordinates: {
            lat: 43.209,
            lng: -79.666
        }
    }
];

var octopus = {
    getMarkers: function() {
        model.map(function(marker) {
            console.log(marker)
        });
    },

    getMarkerNames: function() {
        var names = [];
        model.map(function(marker) {
            names.push(marker.name);
        });
        return names;
    },

    markerCoordinates: function() {
        var coords = [];
        for (let i = 0; i < model.length; i++) {
            coords[i] = [model[i].coordinates.lat, model[i].coordinates.lng];
        }
        return coords;

    }
};


        var middleMapSettings = {
            center: {
                lat: 43.227,
                lng: -79.719
            },
            zoom: 11,
            styles: [
                {
                    featureType: 'all',
                    stylers: [
                        {
                            saturation: -10
                        }, {
                            invert_lightness: true
                        }, {
                            gamma: 1.2
                        }

                    ]
                }, {
                    featureType: 'landscape.natural',
                    stylers: [
                        {
                            saturation: -80
                        }, {
                            lightness: -50
                        }
                    ]
                }, {
                    featureType: 'water',
                    stylers: [
                        {
                            saturation: -10
                        }, {
                            lightness: -60
                        }
                    ]
                }, {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [
                        {
                            color: "#4b4b4b"
                        }

                    ]
                }, {
                    featureType: 'poi.park',
                    stylers: [
                        {
                            saturation: -90
                        }
                    ]
                }
            ]
        };


//         var map = new google.maps.Map(document.getElementById('map'), middleMapSettings);
// // dynamically set the markers and the info window for them
//         function populate() {
//             var daz = [];
//             for (let i = 0; i < model.length; i++) {
//                 daz[i] = new google.maps.Marker({
//                     position: {
//                         lat: model[i].coordinates.lat,
//                         lng: model[i].coordinates.lng
//                     },
//                     title: model[i].name
//                 });
//                 daz[i].infowindow = new google.maps.InfoWindow({content: model[i].description});
//                 daz[i].setMap(map);
//                 daz[i].addListener('click', function() {
//                     this.infowindow.open(map, daz[i]);
//                 })
//             }
//         };
//
//         populate();




////REACT/////

var data = octopus.getMarkerNames();




var List = React.createClass({
    render: function() {
        //loop through model, sandwich each name into <li>'s
        var names = this.props.data.map(function(marker) {
            return (
                <a href="#">
                    <h1 onClick={octopus.getMarkers}>{marker}</h1>
                </a>
            )
        })
        return (
            <div>
                {names}
            </div>
        )
    }
});

ReactDOM.render(
    <div>
    <List data={data}/>
</div>, document.getElementById('markerList'));

var Title = React.createClass({
    render: function() {
        return (
            <div className="col-md-12">
                <h1>{this.props.mainHeading}</h1>
                <Description description='"make way for a scene"'/>
            </div>
        )
    }
});

var Description = React.createClass({
    render: function() {
        return (
            <p>{this.props.description}</p>
        )
    }
});

ReactDOM.render(
    <div>
    <Title mainHeading="Dog Parks in the Golden Horshoe"/>
</div>, document.getElementById('title'));

var Test = React.createClass({

  render: function() {
    var map = new google.maps.Map(document.getElementById('map'), middleMapSettings);
// dynamically set the markers and the info window for them
    function populate() {
        var daz = [];
        for (let i = 0; i < model.length; i++) {
            daz[i] = new google.maps.Marker({
                position: {
                    lat: model[i].coordinates.lat,
                    lng: model[i].coordinates.lng
                },
                title: model[i].name
            });
            daz[i].infowindow = new google.maps.InfoWindow({content: model[i].description});
            daz[i].setMap(map);
            daz[i].addListener('click', function() {
                this.infowindow.open(map, daz[i]);
            })
        }
    };

    populate();

    return (
      <div>
        {map}
      </div>
    )
  }
});

ReactDOM.render(
  <div>
  <Test />
  </div>, document.getElementById('map')
);
