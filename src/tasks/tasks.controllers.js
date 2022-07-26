const taskDB = [{
    id: 1,
    title: 'First to do',
    description: 'Make an API CRUD about a ToDo manager',
    isCompleted: false
}]

// ?Controller to return all my tasks
const getAllTasks = () => {
    return taskDB
}


module.exports = {
    getAllTasks
}