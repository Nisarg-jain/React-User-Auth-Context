import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Access Denied</h3>
        <p className="text-gray-500 mb-4">Please log in to view your profile dashboard.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 text-center space-y-5">
      {/* Upgrade: High-contrast text color for the avatar */}
      <div className="mx-auto w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold uppercase shadow-md">
        {user.username.charAt(0)}
      </div>
      
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">User Dashboard</h3>
        <p className="text-2xl font-bold text-gray-800 mt-1">
          Welcome, <span className="text-blue-600">{user.username}</span>!
        </p>
      </div>

      <p className="text-sm text-gray-400">You have successfully authenticated via React Context.</p>

      <button 
        onClick={() => setUser(null)} 
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-red-100 transition duration-200"
      >
        Logout Session
      </button>
    </div>
  );
}

export default Profile;