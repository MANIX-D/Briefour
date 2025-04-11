import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const userName = 'Manix'; // Cela peut être récupéré depuis un service ou context

  const handleLogout = () => {
    // Ici, tu peux aussi effacer les données de session si nécessaire (par exemple, via localStorage)
    localStorage.removeItem('user'); // Exemple de suppression de données
    navigate('/login'); // Redirige vers la page de login
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          {/* <a href="#" className="block hover:text-indigo-400">Accueil</a> */}
         
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Bienvenue, {userName} 👋</h1>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Déconnexion
          </button>
        </header>

        {/* Dashboard content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Widgets */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
