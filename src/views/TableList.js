import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { fetchChartData } from "../variables/charts.js";


async function fetchData() {
  try {
    const response = await fetch('https://air-backend-yesb.onrender.com/');
    const responseData = await response.json(); // Get response as JSON
    console.log(responseData);
    return responseData
  }catch(e){
    console.log(e)
  }
}

const apiData=await fetchData()
console.log(apiData)
function  Tables() {
  // Sample data for past five days
  const [selectedDate, setSelectedDate] = useState(null);
  

  

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
    {Object.values(apiData).reduce((uniqueDates, item) => {
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
                    
                    {Object.keys(apiData).map(key => (
            apiData[key].date==selectedDate&&(
              <tr >
                            
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
          {Object.keys(apiData).map(key => (
            apiData[key].date === selectedDate && (
              
                <Col  md="6">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Data</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Line
                        data={{
                          labels: ["PM1","PM2.5","PM10","NO2"],
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
                              data: [apiData[key].Pm1,apiData[key].pm2,apiData[key].pm10,apiData[key].no2]
                            }
                          ]
                        }}
                      />
                    </CardBody>
                  </Card>
                </Col>
              )
            
          ))}
        </Row>
      )}
    </div>
  );
}

export default Tables;