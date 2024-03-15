import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { Line } from "react-chartjs-2";

function Tables() {
  // Sample data for past five days
  const [selectedDate, setSelectedDate] = useState(null);

  const pastFiveDaysData = [
    { date: "2024-03-15", sensors: [
        { id: 1, location: "Kalamassery", AQI: 10, SO2: 10, NO2: 10, CO: 10, PM10: 10, PM25: 10 },
        { id: 2, location: "Edapally", AQI: 12, SO2: 11, NO2: 9, CO: 10, PM10: 10, PM25: 10 },
        { id: 3, location: "Kaloor", AQI: 9, SO2: 10, NO2: 10, CO: 10, PM10: 10, PM25: 10 }
    ] },
    { date: "2024-03-16", sensors: [
      { id: 1, location: "Kalamassery", AQI: 10, SO2: 10, NO2: 2, CO: 10, PM10: 10, PM25: 10 },
      { id: 2, location: "Edapally", AQI: 12, SO2: 11, NO2: 9, CO: 10, PM10: 10, PM25: 10 },
      { id: 3, location: "Kaloor", AQI: 9, SO2: 10, NO2: 10, CO: 10, PM10: 10, PM25: 10 }
  ] },
  { date: "2024-03-17", sensors: [
    { id: 1, location: "Kalamassery", AQI: 10, SO2: 10, NO2: 4, CO: 10, PM10: 10, PM25: 10 },
    { id: 2, location: "Edapally", AQI: 12, SO2: 11, NO2: 9, CO: 10, PM10: 10, PM25: 10 },
    { id: 3, location: "Kaloor", AQI: 9, SO2: 10, NO2: 10, CO: 10, PM10: 10, PM25: 10 }
] },
{ date: "2024-03-18", sensors: [
  { id: 1, location: "Kalamassery", AQI: 10, SO2: 10, NO2: 6, CO: 10, PM10: 10, PM25: 10 },
  { id: 2, location: "Edapally", AQI: 12, SO2: 11, NO2: 9, CO: 10, PM10: 10, PM25: 10 },
  { id: 3, location: "Kaloor", AQI: 9, SO2: 10, NO2: 10, CO: 10, PM10: 10, PM25: 10 }
] },
{ date: "2024-03-19", sensors: [
  { id: 1, location: "Kalamassery", AQI: 10, SO2: 10, NO2: 1, CO: 10, PM10: 10, PM25: 10 },
  { id: 2, location: "Edapally", AQI: 12, SO2: 11, NO2: 9, CO: 10, PM10: 10, PM25: 10 },
  { id: 3, location: "Kaloor", AQI: 9, SO2: 16, NO2: 7, CO: 9, PM10: 10, PM25: 10 }
] },
    // Include data for other days
  ];

  // Function to handle date selection from dropdown
  const handleDateSelect = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  return (
    <div className="content">
      <Row>
        <Col md="12">
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Select Date</CardTitle>
            </CardHeader>
            <CardBody>
              <select onChange={handleDateSelect} value={selectedDate || ""}>
                <option value="">-- Select Date --</option>
                {pastFiveDaysData.map((data) => (
                  <option key={data.date} value={data.date}>{data.date}</option>
                ))}
              </select>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {selectedDate && (
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Air Quality Data for {selectedDate}</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Location</th>
                      <th>AQI</th>
                      <th>SO2</th>
                      <th>NO2</th>
                      <th>CO</th>
                      <th>PM 10</th>
                      <th>PM 2.5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pastFiveDaysData.map((data) => (
                      data.date === selectedDate && (
                        data.sensors.map((sensor, index) => (
                          <tr key={index}>
                            <td>{sensor.location}</td>
                            <td>{sensor.AQI}</td>
                            <td>{sensor.SO2}</td>
                            <td>{sensor.NO2}</td>
                            <td>{sensor.CO}</td>
                            <td>{sensor.PM10}</td>
                            <td>{sensor.PM25}</td>
                          </tr>
                        ))
                      )
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
      {selectedDate && (
        <Row>
          {pastFiveDaysData.map((data) => (
            data.date === selectedDate && (
              data.sensors.map((sensor) => (
                <Col key={sensor.id} md="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">{sensor.location} - Sensor {sensor.id}</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Line
                        data={{
                          labels: ["AQI", "SO2", "NO2", "CO", "PM10", "PM2.5"],
                          datasets: [
                            {
                              label: "Readings",
                              fill: false,
                              lineTension: 0.1,
                              backgroundColor: "rgba(75,192,192,0.4)",
                              borderColor: "rgba(75,192,192,1)",
                              borderCapStyle: "round",
                              borderDash: [],
                              borderDashOffset: 0.0,
                              borderJoinStyle: "miter",
                              pointBorderColor: "rgba(75,192,192,1)",
                              pointBackgroundColor: "#fff",
                              pointBorderWidth: 1,
                              pointHoverRadius: 5,
                              pointHoverBackgroundColor: "rgba(75,192,192,1)",
                              pointHoverBorderColor: "rgba(220,220,220,1)",
                              pointHoverBorderWidth: 2,
                              pointRadius: 1,
                              pointHitRadius: 10,
                              data: [sensor.AQI, sensor.SO2, sensor.NO2, sensor.CO, sensor.PM10, sensor.PM25]
                            }
                          ]
                        }}
                      />
                    </CardBody>
                  </Card>
                </Col>
              ))
            )
          ))}
        </Row>
      )}
    </div>
  );
}

export default Tables;
