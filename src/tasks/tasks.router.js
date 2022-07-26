const router = require('express').Router()
const httpTasks = require('./tasks.http')

// ? Route to All tasks and Create a new task
router.route('/tasks')
    .get(httpTasks.getAll)
    .post(httpTasks.create)

// ? Route to obtain a specific task, edit a specific task and delete a specific task
router.route('/tasks/:id')
    .get(httpTasks.getById)
    .delete(httpTasks.deleteById)
    .put(httpTasks.update)

module.exports = {
    router
}