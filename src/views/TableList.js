/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Real Time values </CardTitle>
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
                    <tr>
                      <td>Kalamassery</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                    
                    </tr>
                    <tr>
                      <td>Kalamassery</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      
                    </tr>
                    <tr>
                      <td>Kalamassery</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      
                    </tr>
                    <tr>
                      <td>Kalamassery</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      
                    </tr>
                    <tr>
                      <td>Kalamassery</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      
                    </tr>
                    <tr>
                      <td>Kalamassery</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                     
                    </tr>
                    <tr>
                      <td>Kalamassery</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      <td>10</td>
                      <td>10</td>
                      <td >10</td>
                      
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;