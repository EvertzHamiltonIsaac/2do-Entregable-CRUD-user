const express = require('express')
const MVC_router = require('./MVC/users.router')

const port = 9000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: 'OK'
    })
})

app.use('/', MVC_router)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})