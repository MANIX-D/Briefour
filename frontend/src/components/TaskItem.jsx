import React from 'react';

const TaskItem = ({ task, deleteTask, editTask, toggleComplete }) => {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded shadow-sm">
      <div>
        <h3 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        <p className={`${task.completed ? 'line-through text-gray-300' : 'text-gray-600'}`}>
          {task.description}
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <button
          onClick={() => toggleComplete(task.id)}
          className={`px-3 py-1 rounded text-sm ${
            task.completed
              ? 'bg-green-200 text-green-800'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {task.completed ? '✔ Terminé' : 'Terminer'}
        </button>
        <button
          onClick={() => editTask(task)}
          className="text-blue-500 hover:underline"
        >
          Modifier
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:underline"
        >
          Supprimer
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
