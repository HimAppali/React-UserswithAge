import userEvent from "@testing-library/user-event";
import React from "react";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} is {user.age} years old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
