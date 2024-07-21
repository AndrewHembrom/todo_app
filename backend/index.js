// write basic express boilerplate code
// with express.json() middleware
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }
    
    //push into mongoDB
    try {
        await todo.create({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        })

        res.json({
            msg: "Todo Created"
        })
    } catch (e) {
        res.status(500).json({
            msg: "Something wrong happened",
            error: e.message
        })
    }
})

app.get("/todos", async function (req, res) { 

    try {
        const todos = await todo.find();

        res.json({
            todos
        })

    } catch (e) {
        res.status(500).json({
            msg: "Something wrong happened",
            error: e.message
        })
    }

})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs."
        });
        return;
    }

    try {
        await todo.findByIdAndUpdate(req.body.id, {
            completed: true
        });

        res.json({
            msg: "Todo marked as complete"
        });
    } catch (e) {
        res.status(500).json({
            msg: "Something wrong happened",
            error: e.message
        });
    }
});

app.listen(3000);