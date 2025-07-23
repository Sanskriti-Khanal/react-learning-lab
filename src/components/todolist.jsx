
import { useState } from 'react';
import '../App.css'
function Todolist() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);



  const AddTask = () => {
    if (task.trim() === '') return;
    setTaskList([...taskList, task]);
    setTask('');
  };
  const DeleteTask = (index) => {
    const newTasks = taskList.filter((_, i) => i !== index);
    setTaskList(newTasks);
  };


  return(
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter a task..." 
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={AddTask}>Add</button>
      </div>

      <ul className="task-list">
        {taskList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => DeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
  


