const express = require('express')
const app = express()




function processData(data) {
    const result = []
for (const item of data) {
result.push(item); }
    return result
}

app.listen(3000)
module.exports = app
