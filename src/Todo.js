import React, {useState} from 'react';
import './App.css';

function Todo(props) {
const [newTitle, setNewTitle] = useState('');
const [isEditMode, setIsEditMode] = useState(false);


const editButtonHandler = ()=> {
    props.editTodo(newTitle, props.todo.id);
    setNewTitle('');
}
return (
        <div>

            <h3>{props.todo.title}</h3>
            <p> {props.todo.description}</p>
                <button onClick={()=> props.deleteTodo(props.todo.id)}> delete </button>
                <button disabled={props.index===0} onClick={()=> props.moveTodo(props.index, props.index-1)}> ↑ </button>
                <button disabled={props.isLast} onClick={()=> props.moveTodo(props.index, props.index+1)}> ↓ </button>
                <button onClick={()=> setIsEditMode(! isEditMode)}> edit </button>

            { isEditMode && <>
                <label> title:</label>
                <input type="text" value = {newTitle} onChange={(el)=>setNewTitle(el.target.value)}/>
                <button onClick={editButtonHandler}>update</button>


                </>
            }
        </div>
    );
}

export default Todo
;
