const path = require('path')
const express = require('express')
const app = express()

const publicPath = path.join(__dirname, '..', 'public')  //go to root, then up one level '..' then serve files in public folder

app.use(express.static(publicPath))
const PORT = 3000

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})
// * will serve all routes not in the public folder

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})