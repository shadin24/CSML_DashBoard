import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Table,
} from "reactstrap";
// core components
import { chartExample1 } from "variables/charts.js";

import "./Dashboard.css";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  return (
    <>
      <div className="content">
        

        <Row>
          <Col xs={4}>
            <Card className="card-chart card-chart-condition">
              <CardHeader>
                <CardTitle
                  tag="h1"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "5rem",
                    fontWeight: "1000",
                  }}
                >
                  25
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div
                  className="chart-area condition"
                  style={{ height: "190px" }}
                >
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value="25"
                    className="slider"
                    id="myRange"
                  />
                  <h3>AQI</h3>
                  <p>Good</p>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs={8}>
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Sensor</h5>
                    <CardTitle tag="h2">Sensor Data</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <span
                          className=" d-none d-sm-block d-md-block d-lg-block d-xl-block"
                          style={{ width: "50px" }}
                        >
                          PM 2.5
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          PM 10
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          CO
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="3"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data4",
                        })}
                        onClick={() => setBgChartData("data4")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          NO2
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="4"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data5",
                        })}
                        onClick={() => setBgChartData("data5")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          SO2
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className={"rounded-card-container"}>
          {["PM2.5", "PM10", "CO", "NO2", "SO2"].map((pollutant, index) => {
            // Define an array of colors
            const colors = [
              "bg-blue-500",
              "bg-green-500",
              "bg-yellow-500",
              "bg-red-500",
              "bg-purple-500",
            ];

            // Assign color based on index
            const colorClass = colors[index];

            return (
              <div key={index} className={`rounded-box ${colorClass}`}>
                <div className="inner-round-1">
                  <div key={index} className={`inner-round-2 ${colorClass}`}>
                    <span style={{ color: "white", fontWeight: "bold" }}>
                      {pollutant}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>

         <div className="flex flex-col p-4 border rounded shadow-md m-5 justify-center items-center">
      <div className="m-3 text-center">
        <h3>
          <b>Air Quality Index Scale</b>
        </h3>
        <p className="text-gray-500">
          Know about the category of air quality index (AQI) your ambient air falls in and what it implies.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div  className="flex  p-2 border rounded shadow-md justify-center items-center divs">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_4.webp"
            alt="Good air quality"
            className="w-20 h-20"
          />
          <div className="text-green-500 font-bold m-3 ">Good (0-50)</div>
          <p className="text-gray-500">
            The air is fresh and free from toxins. People are not exposed to any health risk.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center divs">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_3.webp"
            alt="Moderate air quality"
            className="w-20 h-20"
          />
          <div className="text-yellow-500 font-bold m-3 whitespace-nowrap">Moderate (51-100)</div>
          <p className="text-gray-500">
            Acceptable air quality for healthy adults but might cause mild threat to sensitive individuals.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center divs">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_2.webp"
            alt="Poor air quality"
            className="w-20 h-20"
          />
          <div className="text-orange-500 font-bold m-3 ">Poor    (101-200)</div>
          <p className="text-gray-500">
            Inhaling such air can cause slight discomfort and difficulty in breathing. Unhealthy for children, pregnant women, and the elderly.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center divs">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_5.webp"
            alt="Unhealthy air quality"
            className="w-20 h-20"
          />
          <div className="text-red-500 font-bold m-3 ">Unhealthy (201-300)</div>
          <p className="text-gray-500">
            Exposure to air can cause chronic morbidities or even organ impairment. Prolonged exposure can lead to premature death.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center divs">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_5.webp"
            alt="Unhealthy air quality"
            className="w-20 h-20"
          />
          <div className="text-red-500 font-bold m-3 ">Unhealthy (201-300)</div>
          <p className="text-gray-500">
            Exposure to air can cause chronic morbidities or even organ impairment. Prolonged exposure can lead to premature death.
          </p>
        </div>
        <div className="flex  p-2 border rounded shadow-md justify-center items-center divs">
          <img
            src="https://www.aqi.in/assets/images/cartton_shape_6.webp"
            alt="Hazardous air quality"
            className="w-20 h-20"
          />
          <div className="text-green-500 font-bold m-3 ">Hazardous (401-500)</div>
          <p className="text-gray-500">
            Hazardous air quality. Everyone is at risk.
          </p>
        </div>
      </div>
    </div>
  
      </div>
    </>
  );
}

export default Dashboard;
