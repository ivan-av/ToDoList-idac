const controllerTasks = require("./tasks.controllers")

// ? GET: Service where we give the petition that requieres all the tasks
const getAll = (req, res) => {
    const data = controllerTasks.getAllTasks()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

// ? GET by ID: Service where we give the petition to require a specific task
const getById = (req, res) => {
    const id = Number(req.params.id)

    if (id) {
        const data = controllerTasks.getTaskById(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } else {
        res.status(400).json({ message: 'ID is note a number' })
    }
}

// ? POST: Service where we give the petition to create a new task
const create = (req, res) => {
    const data = req.body
    if (data.title && data.description && data.isCompleted) {
        const response = controllerTasks.createTask(data)
        res.status(201).json(response)
    } else {
        res.status(400).json({ message: "Invalid Argunments" })
    }
}

// ? DELETE: Service where we give the petition to delete a specific task
const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if (typeof id === 'number') {
        const deleted = controllerTasks.deleteTask(id)
        if (deleted) {
            res.status(204).json({message: 'Task deleted'})
        } else {
            res.status(400).json({ message: 'Try with another ID' })
        }
        res.status(204).json()
    }
    else {
        res.status(400).json({ message: 'Invalid ID' })
    }
}

// ? PUT: Service where we give the petition to update a specific task
const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.title && data.description && data.isCompleted) {
        const response = controllerTasks.updateTask(id, data)
        res.status(201).json({data, message: "Data edited succesfully" })
    } else {
        res.status(400).json({ message: "Invalid Argunments" })
    }
}


module.exports = {
    getAll,
    getById,
    create,
    deleteById,
    update
}