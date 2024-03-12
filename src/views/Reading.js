import React from 'react'
import { CardCardHeader,
    CardBody, Col,Card,CardHeader} from 'reactstrap'


const Reading = () => {
  return (
    <div>
       <Col lg="2" md="12">
         
         <Card className="card-tasks">
             <CardHeader>
               <h6 className="title d-inline">Grade</h6>
               <p className="card-category d-inline"> Current</p>
             </CardHeader>
             <CardBody>
             
             
             </CardBody>

         </Card>
         </Col>
    </div>
  )
}

export default Reading
