import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import Reading from "./Reading";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";
function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };
  <Row className="justify-content-center align-items-center "></Row>
  return (
    <>
      <div className="content">
        <Row>
        <Col lg="2" md="2" className="col">
        <Card >
             <CardHeader>
               <p className="card-category d-inline"> PM 2.5</p>
             </CardHeader>
             <CardBody>
             <h3 className="title d-inline">10</h3>
             
             
             </CardBody>
         </Card>
         </Col>
         <Col lg="2" md="2" className="col">
        <Card >
             <CardHeader>
               
               <p className="card-category d-inline"> PM 10</p>
             </CardHeader>
             <CardBody>
             <h3 className="title d-inline">10</h3>
             
             </CardBody>
         </Card>
         </Col>
         <Col lg="2" md="2" className="col">
        <Card >
             <CardHeader>
               
               <p className="card-category d-inline"> CO</p>
             </CardHeader>
             <CardBody>
             <h3 className="title d-inline">10</h3>
             
             </CardBody>
         </Card>
         </Col>
         <Col lg="2" md="2" className="col">
        <Card >
             <CardHeader>
               <p className="card-category d-inline"> NO2</p>
             </CardHeader>
             <CardBody>
             <h3 className="title d-inline">10</h3>
             </CardBody>
         </Card>
         </Col>
         <Col lg="2" md="2" className="col">
        <Card >
             <CardHeader>  
               <p className="card-category d-inline"> SO2</p>
             </CardHeader>
             <CardBody>
             <h3 className="title d-inline">10</h3>
             </CardBody>
         </Card>
         </Col>
        </Row>
        <Row>
          <Col xs="12">
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
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
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
        
        
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h3 className="title d-inline">10</h3>
                <p className="card-category d-inline"> Current</p>
              </CardHeader>
              <CardBody>
              
              
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Current Values</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Sensor ID</th>
                      <th>pH</th>
                      <th>Temp</th>
                      <th>TDS</th>
                      <th>Turb</th>
                      <th>DO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S001</td>
                      <td>7.01</td>
                      <td>25.00</td>
                      <td>0.50</td>
                      <td>1.25</td>
                      <td>9.50</td>
                    </tr>
                    <tr>
                      <td>S001</td>
                      <td>7.01</td>
                      <td>25.00</td>
                      <td>0.50</td>
                      <td>1.25</td>
                      <td>9.50</td>
                    </tr>
                    <tr>
                      <td>S001</td>
                      <td>7.01</td>
                      <td>25.00</td>
                      <td>0.50</td>
                      <td>1.25</td>
                      <td>9.50</td>
                    </tr>
                    <tr>
                      <td>S001</td>
                      <td>7.01</td>
                      <td>25.00</td>
                      <td>0.50</td>
                      <td>1.25</td>
                      <td>9.50</td>
                    </tr>
                    <tr>
                      <td>S001</td>
                      <td>7.01</td>
                      <td>25.00</td>
                      <td>0.50</td>
                      <td>1.25</td>
                      <td>9.50</td>
                    </tr>
                    <tr>
                      <td>S001</td>
                      <td>7.01</td>
                      <td>25.00</td>
                      <td>0.50</td>
                      <td>1.25</td>
                      <td>9.50</td>
                    </tr>
                    <tr>
                      <td>S001</td>
                      <td>7.01</td>
                      <td>25.00</td>
                      <td>0.50</td>
                      <td>1.25</td>
                      <td>9.50</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Table>
  <thead>
    <tr style={{ color: 'white', fontSize: 20 }}>
      <th style={{ borderBottom: '1px solid white', padding: '10px' }}>GASES</th>
      <th style={{ borderBottom: '1px solid white', padding: '10px' }}>OPTIMUM VALUE</th>
      <th style={{ borderBottom: '1px solid white', padding: '10px' }}>DANGEROUS VALUE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SO2</td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'green' }}>20 ppm</div></td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'red' }}>100 ppm</div></td>
    </tr>
    <tr>
      <td>NO2</td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'green' }}>40 ppm</div></td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'red' }}>200 ppm</div></td>
    </tr>
    <tr>
      <td>PM2.5</td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'green' }}>25 µg/m³</div></td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'red' }}>100 µg/m³</div></td>
    </tr>
    <tr>
      <td>PM10</td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'green' }}>50 µg/m³</div></td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'red' }}>250 µg/m³</div></td>
    </tr>
    <tr>
      <td>CO</td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'green' }}>10 ppm</div></td>
      <td><div style={{ border: '1px solid white', padding: '10px', borderRadius: '5px', backgroundColor: 'red' }}>50 ppm</div></td>
    </tr>
  </tbody>


</Table>

      </div>
    </>
  );
}
export default Dashboard;