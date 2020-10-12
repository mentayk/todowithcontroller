import React, {useState} from 'react';
import './App.css';

function TodoController(props) {
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isAddModeOn, setIsAddModeOn] = useState(false);

  const addTodoButtonHandler = ()=> {
    {props.addTodo(newTitle, newDescription);
    setNewTitle ('');
    setNewDescription ('');
    setIsAddModeOn(false);
    }
  }

  return (
    <div>
      {! isAddModeOn && <button onClick={()=> setIsAddModeOn (! isAddModeOn)}>add new to do </button>}
      { isAddModeOn && <>
        <label> title:</label>
        <input type="text" value = {newTitle} onChange={(event) => setNewTitle(event.target.value)}/>

        <label>description:</label>
        <input type="text" value = {newDescription} onChange={(event => setNewDescription(event.target.value))}/>
        <button onClick={addTodoButtonHandler}> save to list  </button>
        <button onClick={()=> setIsAddModeOn(false)}>cancel</button>
        </>
      }
    </div>

  );
}

export default TodoController;
