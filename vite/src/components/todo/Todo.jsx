import React, { useEffect, useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]); //? ["task1", "task2", "task3"]
  const [taskData, setTaskData] = useState(""); //? "task1"

  const handleTaskInput = () => {

    // check task is already exist
    if (tasks.includes(taskData)) {
        return alert("Task is already exist");
    }

    if (taskData.trim() !== "") {
        setTasks([...tasks, taskData]);
        setTaskData("")
    } else {
        return alert("Please enter your task");
    }
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  };


  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your task"
          value={taskData}
          onChange={(e) => setTaskData(e.target.value)}
        />
        <button onClick={handleTaskInput}>Add task</button>
      </div>
      <div>
        {tasks.map((task, index) => {
          return (
            <ul>
              <li>{task} <button onClick={() => handleDelete(index)}>Delete</button> <button>Edit</button></li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
