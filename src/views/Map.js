import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const MapWrapper = ({ sensorData }) => {
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;

    const kalamasseryCoords = { lat: 10.0395, lng: 76.3152 };

    const mapOptions = {
      center: kalamasseryCoords,
      zoom: 12,
      scrollwheel: false,
      styles: [] // You can add custom styles here if needed
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Loop through sensorData array and add markers for each location
    sensorData.forEach(data => {
      const sensorMarker = new google.maps.Marker({
        position: data.location,
        map: map,
        animation: google.maps.Animation.DROP,
        title: "Sensor Location: " + data.name
      });

      const contentString = `
        <div style="color: black;">
          <h5>${data.name}</h5>
          <p>CO: ${data.CO}</p>
          <p>SO2: ${data.SO2}</p>
          <p>PM2.5: ${data.PM25}</p>
          <p>PM10: ${data.PM10}</p>
          <p>NH3: ${data.NH3}</p>
        </div>
      `;

      const infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      google.maps.event.addListener(sensorMarker, "click", function () {
        infowindow.open(map, sensorMarker);
      });
    });
  }, [sensorData]);

  return <div ref={mapRef} id="map" style={{ height: "400px" }} />;
};

function Map() {
  // Define sensor data
  const sensorData = [
    {
      name: "Kalamassery",
      location: { lat: 10.0395, lng: 76.3152 },
      CO: 0.5,
      SO2: 2.1,
      PM25: 10,
      PM10: 20,
      NH3: 0.8
    },
    {
      name: "Edapally",
      location: { lat: 10.0331, lng: 76.3075 },
      CO: 0.7,
      SO2: 2.5,
      PM25: 12,
      PM10: 22,
      NH3: 0.9
    },
    {
      name: "Kaloor",
      location: { lat: 9.9888, lng: 76.2925 },
      CO: 0.6,
      SO2: 2.3,
      PM25: 11,
      PM10: 21,
      NH3: 0.85
    }
  ];

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
                  <MapWrapper sensorData={sensorData} />
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
