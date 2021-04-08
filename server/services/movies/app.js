const express = require('express')
const { connectToMongoDb } = require('./config/mongodb')
const app = express()
const router = require('./routers')
const port = 4001

app.use(express.urlencoded({extended : true}))
app.use(express.json())

connectToMongoDb((connected) => {
  if(connected) {
    console.log('connected to movies mongodb');
  } else {
    console.log('connection failed');
  }
})

app.use(router)

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})