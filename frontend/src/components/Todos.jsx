/*
    todos=[
        {
            title: "",
            description: "",
            completed: false
        },
        {
            title: "",
            description: "",
            completed: false
        }
    ]
*/
export function Todos({todos}) { 
    return <div>
        {todos.map(function (todos) {
            return <div>
                <h1>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <button>{ todos.completed == true ? "Completed" : "Mark as Complete" }</button>
            </div>
        })}
    </div>
}