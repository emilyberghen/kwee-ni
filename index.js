const express = require('express')
const app = express()

app.use("/kweeni", require('./routes/kweeni'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))