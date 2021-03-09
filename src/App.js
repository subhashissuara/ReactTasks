import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter your task </label>
          <br />
          <input type="text" id="taskInput" />
          <br />
          <br />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default App;
