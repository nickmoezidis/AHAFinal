import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-6 bg-white shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login to AHA</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;