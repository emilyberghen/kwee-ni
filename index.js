const express = require('express')
const app = express()

app.use("/kweeni", require('./routes/kweeni'))
app.use(express.static('public'))

app.set("view engine", "pug")

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'))