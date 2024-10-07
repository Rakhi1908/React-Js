import React, { useState } from 'react'

export default function Index() {
    const [name, setName] = useState('')
    const [state, setState] = useState([])
    const [index, EditIndex] = useState(null)

    function AddText(e) {
        setName(e.target.value)
    }
 
    function AddTodo() {
        if (index !== null) {
            const updated = state.map((el, i) => {
                return i === index ? name : el
            }
            )
            setState(updated)
            EditIndex(null)
        } else {
            setState([...state, name])
        }
        setName('')
    }

    function deleteTodo(i) {
        let updated = state.filter((el, index) => index !== i)
        setState(updated)
    }

    function editTodo(i) {
        setName(state[i])
        EditIndex(i)
    }

    return (
        <div>
            <h1>To do list</h1>
            <form>
                <input type="text" placeholder="Enter a name" value={name} onChange={AddText} />
            </form>
            <button onClick={AddTodo}>
                {EditIndex !== null ? "Update" : "Edit"}
            </button>
            <ul>
                {state.map((el, i) => (
                    <div key={i}>
                        <li>{el}</li>
                        <button onClick={() => deleteTodo(i)}>Delete</button>
                        <button onClick={() => editTodo(i)}>Edit</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}