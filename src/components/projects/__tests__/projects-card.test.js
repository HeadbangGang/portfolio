import React from 'react'
import { render, screen } from 'test-utils'
import ProjectsCard from '../projects-card'
import projectsData from '../projects-data'

describe('<Projects />', () => {
  it('should render <ProjectsCard />', () => {
    render(<ProjectsCard { ...projectsData[0] } />)
    expect(screen.getByRole('link', { name: /https:\/\/www.pokedex.taydenflitcroft.com/ })).toBeVisible()
  })
})
