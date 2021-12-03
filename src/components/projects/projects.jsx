import React from 'react'
import PropTypes from 'prop-types'
import ProjectsCard from './projects-card'
import projectsData from './projects-data'
import './projects.less'

export default function Projects ({ isSmallView }) {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-title">
        Projects
      </h1>
      { projectsData.map((data) => {
        return (
          <ProjectsCard
            key={ data.name }
            isSmallView={ isSmallView }
            { ...data }
          />
        )
      }) }
    </div>
  )
}

Projects.propTypes = {
  isSmallView: PropTypes.bool
}
