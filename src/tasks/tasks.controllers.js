const taskDB = [{
    id: 1,
    title: 'First to do',
    description: 'Make an API CRUD about a ToDo manager',
    isCompleted: "false"
}]

// ?Controller to return all my tasks
const getAllTasks = () => {
    return taskDB
}

// ?Controller to return a specific task
const getTaskById = (id) => {
    const filteredDB = taskDB.filter((task) => task.id === id)
    return filteredDB[0]
}

// ?Controller handful to create a new task and if the data base is empty create a index 
// ? starting from 1
const createTask = (taskObj) => {
    if (taskDB.length === 0) {
        const newTask = {
            id: 1,
            title: taskObj.title,
            description: taskObj.description,
            isCompleted: taskObj.isCompleted
        }
        taskDB.push(newTask)
        return newTask
    }
    const newTask = {
        id: taskDB[taskDB.length - 1].id + 1,
        title: taskObj.title,
        description: taskObj.description,
        isCompleted: taskObj.isCompleted
    }
    taskDB.push(newTask)
    return newTask
}

// ?Controller to delete a specific task
const deleteTask = (id) => {
    const index = taskDB.findIndex((item) => item.id === id);
    if (index !== -1) {
        taskDB.splice(index, 1);
    }
    return taskDB
}

// ?Controller to update a specific task
const updateTask = (data, id) => {
    const index = taskDB.findIndex((item) => item.id === id);
    if (data.title && data.description && data.isCompleted) {
        taskDB[index] = {
            id,
            title: data.title,
            description: data.description,
            isCompleted: data.isCompleted
        };
    }
    return taskDB[index]
}


module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    updateTask
}