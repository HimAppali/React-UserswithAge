import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ModelPopUp from "../UI/Model";
const AddUser = (props) => {
  const [enteredUserName, SetUserName] = useState("");
  const [enteredAge, SetAge] = useState("");
  const [error, SetError] = useState();
  const AddUserSubmitHandler = function (event) {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      SetError({ title: "Error ❌", msg: "Please enter username and age" });
      return;
    }
    if (+enteredAge < 1) {
      SetError({ title: "Error ❌", msg: "Please valid age" });
      return;
    }
    console.log(enteredUserName, enteredAge);
    // passing data to parent as a method params
    props.onAddNewUser(enteredUserName, enteredAge);
    SetUserName("");
    SetAge("");
  };
  const UsernameChangeHandler = (event) => {
    SetUserName(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    SetAge(event.target.value);
  };
  // if error is true than model will render else nothing will render
  const noErrorhandler = () => {
    SetError(null);
  };
  return (
    <div>
      {error && (
        <ModelPopUp
          title={error.title}
          errormsg={error.msg}
          stopErrorHandler={noErrorhandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserSubmitHandler}>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            className="inputBox"
            value={enteredUserName}
            onChange={UsernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            className="inputBox"
            value={enteredAge}
            onChange={AgeChangeHandler}
          />
          <Button type="submit"> Add User </Button>
          {/* <button type="submit" className="inputBox">
          Add User
        </button> */}
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
