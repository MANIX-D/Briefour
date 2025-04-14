import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editingTask, updateTask }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    } else {
      setTask({ title: '', description: '' });
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title || !task.description) return;

    editingTask ? updateTask(task) : addTask(task);
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700">Titre</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full border px-4 py-2 rounded shadow-sm focus:ring focus:ring-blue-200"
          placeholder="Entrez le titre de la tâche"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Description</label>
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full border px-4 py-2 rounded shadow-sm focus:ring focus:ring-blue-200"
          placeholder="Entrez la description"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium"
      >
        {editingTask ? 'Modifier la tâche' : 'Ajouter la tâche'}
      </button>
    </form>
  );
};

export default TaskForm;
