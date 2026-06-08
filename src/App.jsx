import { useContext } from 'react';
import './App.css'; // Make sure this isn't overriding your Tailwind configs
import UserContextProvider from './context/UserContextProvider';
import UserContext from './context/UserContext';
import Login from './components/login';
import Profile from './components/profile';

function MainContent() {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full flex flex-col items-center justify-center">
        {!user ? <Login /> : <Profile />}
      </div>
    </div>
  );
}

function App() {
  return (
    <UserContextProvider>
      <MainContent />
    </UserContextProvider>
  );
}

export default App;