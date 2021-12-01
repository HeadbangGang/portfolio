import React from 'react'
import { render, screen } from 'test-utils'
import ProjectsCard from '../projects-card'
import projectsData from '../projects-data'

describe('<Projects />', () => {
  it('should render <ProjectsCard />', () => {
    const { debug } = render(<ProjectsCard { ...projectsData[0] } />)
    expect(screen.getByRole('link', { name: /Pokédex by Tayden Flitcroft Hosted at: https:\/\/www.pokedex.taydenflitcroft.com/ })).toBeVisible()
    expect(screen.getByRole(''))
    debug()
  })
})
