import React from 'react'
import workHistoryData from './work-history-data'
import './work-history.less'

export const WorkHistory = () => {
  return (
    <div className="work-history">
      <h1 className="work-history__title">
        Work History
      </h1>
      <div className="content-container">
        { workHistoryData.map((item, index) => {
          return (
            <div key={ index } className="content-container__data">
              <div className="job-title">
                { item.title }
              </div>
              <div className="employer">
                { item.employer }
              </div>
              <div className="job-description">
                { item.description }
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

export default WorkHistory
