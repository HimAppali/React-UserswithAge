import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  // storing and updating the userdata from Adduser page
  const [userData, updateUserData] = useState([]);
  const AddNewUserHandler = (uName, uAge) => {
    updateUserData((prevuserData) => {
      return [
        ...prevuserData,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      {/* getting the data from child as a method params */}
      <AddUser onAddNewUser={AddNewUserHandler} />
      {/* passing the data received from adduser to userlist */}
      <UserList users={userData} />
    </div>
  );
}

export default App;
