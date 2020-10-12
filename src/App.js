import React, {useState} from 'react';
import './App.css';
import Todo from "./Todo";
import TodoController from "./TodoController";

function App() {
    const initialState = [
        {id: 1, title: "First", description: "Learn HTML"},
        {id: 2, title: "Second", description: "Learn CSS"},
        {id: 3, title: "Third", description: "Learn JS"},
        {id: 4, title: "Fourth", description: "Learn REACT"},
    ]

    const [todos, setTodos] = useState(initialState);

    const deleteTodo = (id) => {
        const newList = todos.filter(el => el.id !== id)
        setTodos(newList);
    }
    const moveTodo = (currentIndex, nextIndex) => {
        const newList = [...todos];
        const currentEl = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentEl;
        setTodos(newList);
    }

    const addTodo = (newTitle, newDescription) => {
        const newTodo = {id: Math.random(), title: newTitle, description: newDescription}
        const newList = [...todos, newTodo];
        setTodos(newList);
    }

    const editTodo = (newTitle, id) => {
        const newList = todos.map(el => {
            if (el.id === id) return {...el, title: newTitle}
            return el })
            setTodos(newList)

    }
    return (
        <div>
            <TodoController addTodo={addTodo}/>
            {todos.map((el, index) => <Todo
                isLast={index === todos.length - 1}
                todo={el}
                deleteTodo={deleteTodo}
                moveTodo={moveTodo}
                index={index}
                editTodo = {editTodo}
            />)}
        </div>
    );
}

export default App;
