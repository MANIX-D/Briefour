import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, editTask, toggleComplete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Mes Tâches</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">Aucune tâche pour l’instant.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
