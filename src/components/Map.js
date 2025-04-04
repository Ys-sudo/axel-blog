import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

const styling = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

export class MapContainer extends Component {
  state = {
    showingInfoWindow: true, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div style={{ position: "relative", height: "500px" }}>
        {console.log(this.props)}
        <Map
          google={this.props.google}
          zoom={13}
          styles={styling}
          initialCenter={{
            lat: 51.39563897179198,
            lng: 16.20296772564301,
          }}
        >
          {this.props.google && (
            <Marker
              onClick={this.onMarkerClick}
              name={"Axel Travel - biuro podróży"}
              icon={{
                url: "/img/art-marker.svg",
                anchor: new (this.props.google.maps?.Point ||
                  window.google.maps.Point)(17, 46),
                scaledSize: new (this.props.google.maps?.Size ||
                  window.google.maps.Size)(50, 50),
                alt: "Axel Travel - biuro podróży",
              }}
            />
          )}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4 style={{ fontSize: "15px" }}>
                <b>{this.state.selectedPlace.name}</b>
              </h4>
              <div>
                <h3 className="text-sm font-bold">Biuro obsługi klienta</h3>
                <h4 className="flex items-center text-sm mt-2">
                  <img
                    src="/img/clock.svg"
                    alt="godziny otwarcia"
                    className="w-5 h-5 mr-4"
                  />
                  pon. - pt. 9:00 - 17:00
                </h4>
                <p className="mt-2 flex items-center">
                  <img
                    src="/img/map-marker-alt.svg"
                    alt="ulica"
                    className="w-5 h-5 mr-4"
                  />
                  ul. Odrodzenia 7a
                </p>
                <p className="mt-2 flex items-center">
                  <img
                    src="/img/globe.svg"
                    alt="miasto"
                    className="w-5 h-5 mr-4"
                  />
                  59-300 Lubin
                </p>
              </div>
              <p className="mt-2 flex items-center">
                Zapraszamy do złożenia nam wizyty!
              </p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD6mS0O11bumR8Hp-A8uw__YQDC_jxc9ZQ",
  language: "polski",
})(MapContainer);
