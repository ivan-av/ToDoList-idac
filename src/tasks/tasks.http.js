const controllerTasks = require("./tasks.controllers")

// ? Service where we give the petition that requieres all the tasks
const getAll = (req, res) => {
    const data = controllerTasks.getAllTasks()
    res.status(200).json({
        items:data.length,
        response: data
    })
}

module.exports = {
    getAll
}