const express = require("express")


const app = express();

const PORT = 8000;

app.use(express())

//?Defining routes and HTTP methods (verbs) of each route
// !ROUTES                HTTP Method                   Description/Function
//* /tasks              > GET (all tasks)               Obtain all the tasks
//* /tasks/:id          > GET (task by id)              Obtain an specific task

//* /tasks/             > for POST
//* /tasks/:id          > for GET tasks by id


//* app.use("/todo", (req, res) => {
//     res.json({ message: "Use petition", method: req.method})
// })

// ? Here are all the routes of my tasks
// app.use('/api/v1')

app.listen(PORT, () => {
    console.log("Server started at port 8000");
});