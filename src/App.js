import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserLists from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserLists users={usersList} />
    </div>
  );
}

export default App;
