const MOCK_DELAY = 1000
const mockProjects = require('./mocks/projects.ts')

const mockRoutes = (app) => {
    app.get('/portfolio/projects', (req, res) => setTimeout(() => res.status(200).send(mockProjects), MOCK_DELAY))
    app.post('/portfolio/contact', (req, res) => setTimeout(() => res.status(200).send({ emailSentSuccess: false }), MOCK_DELAY))
}

module.exports = mockRoutes
