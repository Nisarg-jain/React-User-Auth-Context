import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Upgrade: Strictly validate BOTH username and password
    if (!username.trim() || !password.trim()) {
      return alert("Please enter both a username and a password.");
    }
    
    setUser({ username });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 transition-all">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h3>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Username</label>
          <input 
            type="text" 
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-blue-200 transition-all duration-200"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;