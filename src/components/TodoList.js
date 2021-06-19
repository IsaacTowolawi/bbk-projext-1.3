import React, {useState} from 'react'
import TodoForm from "./TodoForm"
import Todo from "./Todo"
import "./TodoList.css"

function TodoList() {

    const [todos, setTodo] = useState ([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos =[todo, ...todos]

        setTodo(newTodos)

    }

    const updateTodo = (todoId, newValue, item) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }
    setTodo(prev => prev.map(item = (item.id === todoId ? newValue : item)))

    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodo(removeArr)
    }

    const completeTodo = id => {
        let refreshedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodo(refreshedTodos)
    }

    return (
        <div>
            <h1>What do we have planned for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
            todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}
export default TodoList
