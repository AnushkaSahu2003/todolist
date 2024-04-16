import React, { useState } from "react";
import Header from "./components/Header";
import Create from "./components/Create";
import Show from "./components/Show";
const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskSubmit = (title) => {
    setTasks([...tasks, { title: title, completed: false }]);
  };

  const handleDelete = (index) => {
    const copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    setTasks(copyTasks);
  };

  const handleCompleteToggle = (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].completed = !copyTasks[index].completed;
    setTasks(copyTasks);
  };

  const completedCount = tasks.filter((t) => t.completed === true).length;

  return (
    <div className="overflow-x-hidden border-t-2 w-screen min-h-[100vh] bg-zinc-800 flex items-center flex-col">
      <Header completedCount={completedCount} totalCount={tasks.length} />
      <Create onTaskSubmit={handleTaskSubmit} />
      <Show tasks={tasks} onDelete={handleDelete} onCompleteToggle={handleCompleteToggle} />
    </div>
  );
};

export default App;
