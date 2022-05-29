const MOCK_DELAY = 1000
const mockProjects = require('./mocks/projects.ts')
const fs = require('fs')
const path = require('path')

const mockRoutes = (app) => {
    app.get('/portfolio/projects', (req, res) => setTimeout(() => res.status(200).send(mockProjects), MOCK_DELAY))
    app.post('/portfolio/contact', (req, res) => setTimeout(() => {
        Math.random() < 0.5
            ? res.status(200).send({ emailSentSuccess: true })
            : res.status(200).send({ emailSentSuccess: false })
    }, MOCK_DELAY))
    app.get('/portfolio/asset', (req, res) => setTimeout(() => {
        if (req.query.fileName === 'resume.pdf') res.send(fs.readFileSync(path.join(__dirname,'mocks/resume.pdf')))
        if (req.query.fileName === 'pdf-worker.min.js') res.send(fs.readFileSync(path.join(__dirname,'mocks/pdf-worker.min.js')))
    } ,MOCK_DELAY))
}

module.exports = mockRoutes
