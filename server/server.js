const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const publicPath = path.join(__dirname, '..', 'public')  //go to root, then up one level '..' then serve files in public folder

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})
// * will serve all routes not in the public . * is for all unmatched routes
//10 - if what user requested is not in public folder, just serve index.html

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})