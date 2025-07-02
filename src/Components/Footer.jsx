import React from 'react';
import logo from '/logo.png'; // Ensure logo.png is in the public/ folder

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <img
          src={logo}
          alt="AHA Logo"
          className="h-32 sm:h-40 w-auto mb-4 sm:mb-0"
        />
        <p className="text-sm text-center sm:text-right">
          &copy; {new Date().getFullYear()} American Homeschool Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

