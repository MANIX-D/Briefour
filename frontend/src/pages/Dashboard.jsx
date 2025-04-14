import React, { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all' | 'completed' | 'incomplete'

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => task.id === updatedTask.id ? updatedTask : task));
    setEditingTask(null);
  };

  const toggleComplete = (taskId) => {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const clearAllTasks = () => {
    if (window.confirm('Es-tu sûr de vouloir supprimer toutes les tâches ?')) {
      setTasks([]);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Bienvenue 👋</h1>
        <p className="text-gray-500">Gère tes tâches avec efficacité</p>
      </div>

      {/* Barre de filtres + bouton suppression */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <label className="mr-2 font-medium">Filtrer :</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded"
          >
            <option value="all">Toutes</option>
            <option value="completed">Terminées</option>
            <option value="incomplete">Non terminées</option>
          </select>
        </div>
        <button
          onClick={clearAllTasks}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Supprimer toutes les tâches
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <TaskForm
          addTask={addTask}
          editingTask={editingTask}
          updateTask={updateTask}
        />
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default Dashboard;
