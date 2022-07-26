const express = require("express")
const tasksRouter = require('./tasks/tasks.router').router


const app = express();

const PORT = 8000;

app.use(express())

//?Defining routes and HTTP methods (verbs) of each route
// !ROUTES                HTTP Method                   Description/Function
//* /tasks              > GET (all tasks)               Obtain all the tasks
//* /tasks/:id          > GET (task by id)              Obtain a specific task
//* /tasks/             > POST                          Create a task
//* /tasks/:id          > DELETE (task by id)           Delete a specific task
//* /tasks/:id          > PUT (task by id)              Edit a specific task


// app.use("/todo", (req, res) => {
//     res.json({ message: "Use petition", method: req.method})
// })

// ? Here are all the routes of my tasks
app.use('/api/v1', tasksRouter)

app.listen(PORT, () => {
    console.log("Server started at port 8000");
});