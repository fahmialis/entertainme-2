const express = require('express')
const { connectToMongoDb } = require('./config/mongodb')
const router = require('./routers')
const app = express()
const port = 3000

app.use(express.urlencoded({extended : true}))
app.use(express.json())

connectToMongoDb((connected) => {
  if(connected) {
    console.log('connected to mongodb');
  } else {
    console.log('connection failed');
  }
})

app.use(router)



app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})