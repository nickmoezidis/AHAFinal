import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="/logo.png"
                alt="American Homeschool Academy"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="space-x-6 text-purple-700 font-medium text-md">
            <Link to="/" className="hover:text-purple-900">Home</Link>
            <Link to="/about" className="hover:text-purple-900">About</Link>
            <Link to="/curriculum" className="hover:text-purple-900">Curriculum</Link>
            <Link to="/faq" className="hover:text-purple-900">FAQ</Link>
            <Link to="/contact" className="hover:text-purple-900">Contact</Link>
            <Link to="/login" className="hover:text-purple-900">Login</Link>
            <Link to="/dashboard" className="hover:text-purple-900">Dashboard</Link>
            <Link to="/avatarlesson" className="hover:text-purple-900">Lesson</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
