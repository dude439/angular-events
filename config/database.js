module.exports = {
    database: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/angularevents',
    secret: 'secret'
}