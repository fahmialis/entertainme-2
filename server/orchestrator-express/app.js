const express = require('express')
const app = express()
const router = require('./routers')
const port = 4000
const errorHandler = require('./middlewares/errorHandler')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})