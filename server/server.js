const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, '..', 'public')  //go to root, then up one level '..' then serve files in public folder

app.use(express.static(publicPath))
const PORT = process.env.PORT

app.listen(3000, () => {
    console.log(`Server is up on port ${PORT}`)
})