import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import UserInput from './components/AddUser/AddUser';
import Users from './components/Users/Users';

function App() {
  const [users, setUsers] = useState([]);

  const newUserHandler = (newUser) =>
    setUsers((prevUsers) => [{ ...newUser, id: uuid() }, ...prevUsers]);
  const deleteUserHandler = (userId) =>
    setUsers((prevUsers) => prevUsers.filter((goal) => goal.id !== userId));

  return (
    <div>
      <UserInput onNewUser={newUserHandler} />
      <Users onUserSelected={deleteUserHandler} users={users} />
    </div>
  );
}

export default App;
