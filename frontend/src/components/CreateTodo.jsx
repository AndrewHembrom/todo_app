import { useState } from "react";

export function CreateTodo() { 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Title" onChange={function (e) {
            const value = e.target.value;
            setTitle(value);
        }}/>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Description" onChange={function (e) {
            const value = e.target.value;
            setDescription(value);
        }}/>
        
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => { 
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async function (res) { 
                    const json = await res.json();
                    alert("Todo Added");
                })  
        }}>Add a Todo</button>
    </div>
}