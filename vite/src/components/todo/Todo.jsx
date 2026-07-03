import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]); //? ["task1", "task2", "task3"]
  const [taskData, setTaskData] = useState(""); //? "apple"
//? ["task1", "task2", "task3"]
//? "task1"
  const handleTaskData = () => {

    if (tasks.includes(taskData)) {
      return alert("Task already exists");
    }

    if (taskData.trim() !== "") {
      setTasks([...tasks, taskData]);
      setTaskData("")
    } else {
      return alert("Please enter a task");
    }
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
        <button onClick={handleTaskData}>Add Task</button>
      </div>
      <div>
        {tasks.map((task) => {
          return (
            <ul>
              <li>{task}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
