
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-lg">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/create"
              className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500"
            >
              Create
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
