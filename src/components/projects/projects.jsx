import React from 'react'
import ProjectsCard from './projects-card'
import projectsData from './projects-data'
import './projects.less'

export default function Projects () {
  return (
    <div className="projects-wrapper">
      <h1 className="projects-title">
        Projects
      </h1>
      { projectsData.map((data) => {
        return (
          <ProjectsCard
            key={ data.name }
            { ...data }
          />
        )
      }) }
    </div>
  )
}
