const MOCK_DELAY = 1000
const mockProjects = require('./mocks/projects')
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
    app.post('/oauth/token', (req, res) => {
        setTimeout(() => {
            res.send({
                access_token: 'fjkldsajfkldsajflka'
            })
        }, MOCK_DELAY)
    })
    app.get('/mock/client-data', (req, res) => {
        setTimeout(() => {
            res.send({
                Parameters: [
                    {
                        Name: 'Auth0_Global_Backend_Client_ID',
                        Value: 'local client id'
                    },
                    {
                        Name: 'Auth0_Global_Backend_Client_Secret',
                        Value: 'local client secret'
                    }
                ]
            })
        }, MOCK_DELAY)
    })
}

module.exports = mockRoutes
