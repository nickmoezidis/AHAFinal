import React from 'react';

const Contact = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Contact Us</h1>
      <p className="mb-4">We’d love to hear from you! Reach out with questions, feedback, or partnership inquiries.</p>
      <form className="space-y-4">
        <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Your Name" />
        <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Your Email" />
        <textarea className="w-full p-2 border border-gray-300 rounded" placeholder="Your Message" rows="4" />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
