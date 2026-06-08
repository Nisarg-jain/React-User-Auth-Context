import React,{useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  const {user} = useContext(UserContext);
  if (!user) {
    return (
      <div>
        <h1>Profile</h1>
        <p>Please log in to view your profile.</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Profile</h1>
      <p>This is the profile page.</p>
    </div>
  );
}

export default Profile;