import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTaskList([...taskList, input]);
      setInput("");
    }
  };

  return (
    <form className="flex flex-row items-center gap-3 w-full max-w-lg" onSubmit={handleAddTask}>
      <input 
        className="border rounded-lg py-2 px-4 w-full text-lg focus:outline-none focus:ring-2 focus:ring-violet-400" 
        type="text" 
        placeholder="Add a task" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Task input"
      />
      <button className="bg-violet-500 hover:bg-violet-600 text-white font-bold py-2 px-6 rounded" type="submit">
        Add
      </button>
    </form>
  );
};

export default Input;
