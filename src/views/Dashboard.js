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

        <Table>
          <thead>
            <tr style={{ color: "white", fontSize: 20 }}>
              <th style={{ borderBottom: "1px solid white", padding: "10px" }}>
                GASES
              </th>
              <th style={{ borderBottom: "1px solid white", padding: "10px" }}>
                OPTIMUM VALUE
              </th>
              <th style={{ borderBottom: "1px solid white", padding: "10px" }}>
                DANGEROUS VALUE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NO2</td>
              <td>
                <FaCheckCircle style={{ color: "green" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "green",
                    }}
                  >
                    40 ppm
                  </div>
                </div>
              </td>
              <td>
                <FaExclamationCircle style={{ color: "red" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    200 ppm
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>SO2</td>
              <td>
                <FaCheckCircle style={{ color: "green" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "green",
                    }}
                  >
                    20 ppm
                  </div>
                </div>
              </td>
              <td>
                <FaExclamationCircle style={{ color: "red" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    100 ppm
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>PM2.5</td>
              <td>
                <FaCheckCircle style={{ color: "green" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "green",
                    }}
                  >
                    25 µg/m³
                  </div>
                </div>
              </td>
              <td>
                <FaExclamationCircle style={{ color: "red" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    100 µg/m³
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>PM10</td>
              <td>
                <FaCheckCircle style={{ color: "green" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "green",
                    }}
                  >
                    50 µg/m³
                  </div>
                </div>
              </td>
              <td>
                <FaExclamationCircle style={{ color: "red" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    250 µg/m³
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>CO</td>
              <td>
                <FaCheckCircle style={{ color: "green" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "green",
                    }}
                  >
                    10 ppm
                  </div>
                </div>
              </td>
              <td>
                <FaExclamationCircle style={{ color: "red" }} />
                <div style={{ display: "inline-block", paddingLeft: "5px" }}>
                  <div
                    style={{
                      border: "1px solid white",
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    50 ppm
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
