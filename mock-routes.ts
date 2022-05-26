const MOCK_DELAY = 1000
const mockProjects = require('./mocks/projects.ts')
const fs = require('fs')

const mockRoutes = (app) => {
    app.get('/portfolio/projects', (req, res) => setTimeout(() => res.status(200).send(mockProjects), MOCK_DELAY))
    app.post('/portfolio/contact', (req, res) => setTimeout(() => res.status(200).send({ emailSentSuccess: false }), MOCK_DELAY))
    app.get('/portfolio/resume', (req, res) => setTimeout(() => {
        const pdf = fs.readFileSync('./mocks/resume.pdf')
        res.contentType('application/pdf')
        res.send(pdf)
    } ,MOCK_DELAY))
    app.get('/portfolio/pdf-worker', (req, res) => setTimeout(() => res.send(fs.readFileSync('./mocks/pdf-worker.min.js')), MOCK_DELAY))
}

module.exports = mockRoutes
