import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { Bar } from "react-chartjs-2";
import { fetchChartData } from "../variables/charts.js";

async function fetchData() {
  try {
    const response = await fetch('https://air-backend-yesb.onrender.com/');
    const responseData = await response.json(); // Get response as JSON
    console.log(responseData);
    return responseData
  } catch(e) {
    console.log(e)
  }
}

function Tables() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setApiData(data);
    };
    getData();
  }, []);

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
                {apiData && Object.values(apiData).reduce((uniqueDates, item) => {
                  if (!uniqueDates.includes(item.date)) {
                    uniqueDates.push(item.date);
                  }
                  return uniqueDates;
                }, []).map(date => (
                  <option key={date} value={date}>
                    {date}
                  </option>
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
                      <th>PM1</th>
                      <th>PM2.5</th>
                      <th>PM10</th>
                      <th>NO2</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiData && Object.keys(apiData).map(key => (
                      apiData[key].date === selectedDate && (
                        <tr key={key}>
                          <td>{apiData[key].Pm1}</td>
                          <td>{apiData[key].pm2}</td>
                          <td>{apiData[key].pm10}</td>
                          <td>{apiData[key].no2}</td>
                        </tr>
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
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Data</CardTitle>
              </CardHeader>
              <CardBody>
                <Bar
                  data={{
                    labels: apiData && Object.keys(apiData).map(key => apiData[key].date), // Use date values as X-axis labels
                    datasets: [
                      {
                        label: "PM1",
                        backgroundColor: "rgba(255, 0, 0, 0.6)", // Red
                        borderColor: "rgba(255, 0, 0, 1)",
                        borderWidth: 1,
                        data: apiData && Object.keys(apiData).map(key => apiData[key].Pm1)
                      },
                      {
                        label: "PM2.5",
                        backgroundColor: "rgba(0, 255, 0, 0.6)", // Green
                        borderColor: "rgba(0, 255, 0, 1)",
                        borderWidth: 1,
                        data: apiData && Object.keys(apiData).map(key => apiData[key].pm2)
                      },
                      {
                        label: "PM10",
                        backgroundColor: "rgba(0, 0, 255, 0.6)", // Blue
                        borderColor: "rgba(0, 0, 255, 1)",
                        borderWidth: 1,
                        data: apiData && Object.keys(apiData).map(key => apiData[key].pm10)
                      },
                      {
                        label: "NO2",
                        backgroundColor: "rgba(255, 255, 0, 0.6)", // Yellow
                        borderColor: "rgba(255, 255, 0, 1)",
                        borderWidth: 1,
                        data: apiData && Object.keys(apiData).map(key => apiData[key].no2)
                      }
                    ]
                  }}
                  options={{
                    scales: {
                      xAxes: [{ stacked: true }],
                      yAxes: [{ stacked: true }]
                    },
                    legend: {
                      display: true, // Display legend
                      position: 'top', // Position of legend
                      labels: {
                        fontColor: '#333', // Color of legend text
                        fontSize: 12 // Size of legend text
                      }
                    }
                  }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Tables;