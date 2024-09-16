import './App.css';
import { useState } from 'react';
import Input from './components/Input';
import Board from './components/Board';

function App() {
  const [taskList, setTaskList] = useState([]);

  const handleDeleteTask = (taskIndex) => {
    const newTaskList = taskList.filter((_, index) => index !== taskIndex);
    setTaskList(newTaskList);
  };

  const handleUpdateTask = (updatedTask, taskIndex) => {
    const newTaskList = taskList.map((task, index) =>
      index === taskIndex ? updatedTask : task
    );
    setTaskList(newTaskList);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">02-To-Do-Board</h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12 mt-8">
        {taskList.length > 0 ? (
          taskList.map((task, index) => (
            <Board
              key={index}
              task={task}
              onDelete={() => handleDeleteTask(index)}
              onUpdate={(updatedTask) => handleUpdateTask(updatedTask, index)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full text-center">
            No tasks added yet. Start adding tasks!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
