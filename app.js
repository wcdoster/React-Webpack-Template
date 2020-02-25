const express = require('express')
const app = express()

app.get('/', express.static(__dirname))

app.listen(3000, ()=>console.log("App running on port 3000!"))