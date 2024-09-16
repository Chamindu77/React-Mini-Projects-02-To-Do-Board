import React, { useState } from "react";

const Board = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = () => {
    onUpdate(updatedTask);
    setIsEditing(false);
  };

  return (
    <div className="max-w-sm rounded-xl shadow-lg bg-white border flex flex-col items-center justify-center text-center p-4 transition-transform transform hover:scale-105">
      {isEditing ? (
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
          className="border-b-2 border-gray-400 py-2 text-lg focus:outline-none focus:border-violet-500 mb-4"
        />
      ) : (
        <p className="text-lg font-medium text-gray-800 mb-4">{task}</p>
      )}

      <div className="flex gap-4">
        {isEditing ? (
          <>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={onDelete}
              aria-label="Delete task"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
