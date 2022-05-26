const MOCK_DELAY = 1000
const mockProjects = require('./mocks/projects.ts')
const fs = require('fs')
const path = require('path')

const mockRoutes = (app) => {
    app.get('/portfolio/projects', (req, res) => setTimeout(() => res.status(200).send(mockProjects), MOCK_DELAY))
    app.post('/portfolio/contact', (req, res) => setTimeout(() => res.status(200).send({ emailSentSuccess: false }), MOCK_DELAY))
    app.get('/portfolio/asset', (req, res) => setTimeout(() => {
        if (req.query.fileName === 'resume.pdf') res.status(200).send({ url: '/mock/resume'})
        if (req.query.fileName === 'pdf-worker.min.js') res.status(200).send({ url: '/mock/pdf-worker'})
    } ,MOCK_DELAY))
    app.get('/mock/resume', (req, res) => res.send(fs.readFileSync(path.join(__dirname,'mocks/resume.pdf'))))
    app.get('/mock/pdf-worker', (req, res) => res.send(fs.readFileSync(path.join(__dirname, 'mocks/pdf-worker.min.js'))))
}

module.exports = mockRoutes
