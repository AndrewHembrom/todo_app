export function CreateTodo() { 
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Title" />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="Description" />
        
        <button style={{
            padding: 10,
            margin: 10
        }} >Add a Todo</button>
    </div>
}