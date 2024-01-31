
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-lg">
              FoodVerse
            </Link>
          </div>
          <div className="flex justify-center">
            <p className='ml-[440px] text-white text-2xl'>Campaign Form</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
