// src/components/Header.jsx

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full bg-blue-500 text-white p-4 shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Todo</h1>
        <div className="space-x-4">
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
