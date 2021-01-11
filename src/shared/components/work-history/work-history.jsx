import React from 'react'
import './work-history.less'



export default class WorkHistory extends React.Component {
    render () {
        
        return (
        <div id="work-history" className="work-history">
           <h2 className="work-history__title">
               Work History
           </h2>
           <div className="work-history__content-container">
                        <div className="grid1">
                        <div className="job-title">Associate Engineer I</div>
                        <div className="employer">Best Buy</div>
                        <div className="job-description">Develop front end components and libraries in JavaScript leveraging frameworks like React JS, Redux, Node JS, and so on. Develop reusable monitoring frameworks that provide insights into the components during runtime. Use modern technology to build accessible, innovative, and highly interactive user interfaces and ensure the technical feasibility of UI/UX designs. Optimize web components for maximum speed and scalability. Collaborate with team members across various disciplines to solve problems at the scale of one of the top 10 e-commerce websites.</div>
                        </div>
                        <div className="grid2">
                        Advanced Repair Agent
                        <div className="employer">Geek Squad</div>
                        <div className="job-description">Diagnose and repair personal computer issues, achieving an average repair rate of over 1 repair per hour with less than a 1% return for redo rate. Provide recommendations to extend usability and reliability of customer computer. Train and develop new technicians beginning their IT careers. Collaborated with Google for a stretch assignment to offer Geek Squad services combined with Google's Nest products to realtors from January 2019 - July 2019.</div>
                        </div>
                        <div className="grid3">
                        Microsoft Expert
                        <div className="employer">Best Buy</div>
                        <div className="job-description">Demonstrate, discuss, and sell Microsoft products and services. Maintained Top 5 in sales and experience month to month with over 100 other Microsoft Experts in my area. Train and develop peers regarding Microsoft's latest offerings for products and services. Operate directly with Microsoft to provide updates to the business's successes and failures within Best Buy, as well as provide recommendations to improve to current operating model.</div>
                        </div>
                        <div className="grid4">
                        Apple Master
                        <div className="employer">Best Buy</div>
                        <div className="job-description">Manage sales metrics for Apple products. Train peers on good sales practices to display the Apple ecosystem that their products utilize. Collaborate with management and Apple Sales Specialists to ensure all customer needs remain fulfilled by ensuring a full purchasing solution for all customers is offered. Ensure all customers received the best shopping experience possible by providing world-class customer service.</div>
                        </div>
                        <div className="grid5">
                        Shift Supervisor
                        <div className="employer">Starbucks</div>
                        <div className="job-description">Manage daily store operations including inventory and cash management while ensuring standard operating procedures are maintained by employees. Train new employees on processes and procedures for their individual roles. Develop existing baristas to assist them with their transition into a leadership role. Maintain customer experience during all hours of business to ensure a sensational visit to the store.</div>
                        </div>
           </div>
        </div>
        )
    }
}