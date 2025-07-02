import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global layout components
import Header from './Components/Header';
import Footer from './Components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Curriculum from './pages/Curriculum';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AvatarLesson from './pages/AvatarLesson';
import NotFound from './pages/NotFound';

// Import avatars data
import { teacherAvatars } from './assets/avatars';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 sm:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Pass teacherAvatars as a prop to AvatarLesson */}
            <Route path="/avatarlesson" element={<AvatarLesson teachers={teacherAvatars} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
