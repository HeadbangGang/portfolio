import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './work-history.less'



export default class WorkHistory extends React.Component {
    render () {
        
        return (
        <div id="work-history" className="work-history">
           <h2 className="work-history__title">
               Work History
           </h2>
           <div className="work-history__content-container">
           <Container>
               <Row style={{justifyContent: 'space-evenly', paddingBottom: '10px'}}>
                   <Col xs={5} style={{border: '1px solid black', padding: '10px'}}>
                        <div id="job-title">Associate Engineer I</div>
                        <div id="employer">Best Buy</div>
                        <div id="job-description">Develop front end components and libraries in JavaScript leveraging frameworks like React JS, Redux, Node JS, and so on. Develop reusable monitoring frameworks that provide insights into the components during runtime. Use modern technology to build accessible, innovative, and highly interactive user interfaces and ensure the technical feasibility of UI/UX designs. Optimize web components for maximum speed and scalability. Collaborate with team members across various disciplines to solve problems at the scale of one of the top 10 e-commerce websites.</div>
                    </Col>
                    <Col xs={5} style={{border: '1px solid black', padding: '10px'}}>
                        <div id="job-title">Advanced Repair Agent</div>
                        <div id="employer">Geek Squad</div>
                        <div id="job-description">Diagnose and repair personal computer issues, achieving an average repair rate of over 1 repair per hour with less than a 1% return for redo rate. Provide recommendations to extend usability and reliability of customer computer. Train and develop new technicians beginning their IT careers. Collaborated with Google for a stretch assignment to offer Geek Squad services combined with Google's Nest products to realtors from January 2019 - July 2019.</div>
                    </Col>
                </Row>
                <Row style={{justifyContent: 'space-evenly'}}>
                    <Col xs={5} style={{border: '1px solid black', padding: '10px'}}>
                        <div id="job-title">Microsoft Expert</div>
                        <div id="employer">Best Buy</div>
                        <div id="job-description">Demonstrate, discuss, and sell Microsoft products and services. Maintained Top 5 in sales and experience month to month with over 100 other Microsoft Experts in my area. Train and develop peers regarding Microsoft's latest offerings for products and services. Operate directly with Microsoft to provide updates to the business's successes and failures within Best Buy, as well as provide recommendations to improve to current operating model.</div>
                    </Col>
                    <Col xs={5} style={{border: '1px solid black', padding: '10px'}}>
                        <div id="job-title">Shift Supervisor</div>
                        <div id="employer">Starbucks</div>
                        <div id="job-description">Manage daily store operations including inventory and cash management while ensuring standard operating procedures are maintained by employees. Train new employees on processes and procedures for their individual roles. Develop existing baristas to assist them with their transition into a leadership role. Maintain customer experience during all hours of business to ensure a sensational visit to the store.</div>
                    </Col>
                </Row>
            </Container>
           </div>
        </div>
        )
    }
}