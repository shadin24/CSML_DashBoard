import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// Modified MapWrapper component
const MapWrapper = () => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;

    // Coordinates of Kalamassery
    let kalamasseryCoords = { lat: 10.0395, lng: 76.3152 };

    // Create a new map centered on Kalamassery
    const mapOptions = {
      center: kalamasseryCoords,
      zoom: 12,
      scrollwheel: false,
      styles: [
        // Google Map styles
      ],
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Hardcoded coordinates for the sensor location
    const sensorCoords = { lat: 10.0428, lng: 76.3317 }; // Example coordinates, replace with actual sensor location

    const sensorMarker = new google.maps.Marker({
      position: sensorCoords,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "YOU ARE HERE!!!",
    });

    const contentString = "Sensor Location";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    // Show info window when marker is clicked
    google.maps.event.addListener(sensorMarker, "click", function () {
      infowindow.open(map, sensorMarker);
    });
  }, []);

  return <div ref={mapRef} id="map" style={{ height: "400px" }} />;
};

function Map() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;

