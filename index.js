const express = require('express')
const app = express()

function createTask(title, assignee) {
  return { title: title, assignee: assignee };
    return { title: title, assignee: assignee }

function processData(data) {
    const result = []
for (const item of data) {
        result.push(item)
    return result
}

app.listen(3000)
