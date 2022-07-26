const router = require('express').Router()
const httpTasks = require('./tasks.http')

router.route('/tasks')
    .get(httpTasks.getAll)

    module.exports = {
        router
    }