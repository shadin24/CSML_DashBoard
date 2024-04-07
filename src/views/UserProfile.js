
import React from "react";


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const metroStations = [
  "Aluva",
  "Pulinchodu",
  "Companypady",
  "Ambattukavu",
  "Muttom",
  "Kalamassery",
  "Cusat",
  "Pathadippalam",
  "Edapally",
  "Changampuzha Park",
  "Palarivattom",
  "JLN Stadium",
  "Kaloor",
  "Town Hall",
  "Maharaja's College",
  "MG Road",
  "Jos Junction",
  "Lissie",
  "Ernakulam South",
  "Kadavanthra",
  "Elamkulam",
  "Vyttila",
  "Thykoodam",
];

function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          defaultValue="srishant"
                          placeholder="Com"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                    <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Srishant@email.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                    <FormGroup>
                        <label for="location">Location</label>
                        <Input
                          type="select"
                          name="location"
                          id="location"
                          defaultValue="Select a metro station"
                        >
                          <option disabled>Select nearest  a metro station</option>
                          {metroStations.map((station, index) => (
                            <option key={index} value={station}>
                              {station}
                            </option>
                          ))}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Phone</label>
                        <Input
                          defaultValue="987654321"
                          placeholder=""
                          type="nu"
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col md="8">
                      
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src=''
                    />
                    <h5 className="title">Srishant</h5>
                  </a>
                  <p className="description">Aluva</p>
                </div>
                <div className="card-description">
                 
                </div>
              </CardBody>
              
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;