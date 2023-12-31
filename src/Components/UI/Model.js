import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./Model.module.css";

const ModelPopUp = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.stopErrorHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <section className={classes.content}>
          <p>{props.errormsg}</p>
        </section>
        <footer className={classes.actions}>
          <Button onClick={props.stopErrorHandler}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ModelPopUp;
