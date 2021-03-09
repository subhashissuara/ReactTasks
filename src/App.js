import React, { Component } from "react";
import Overview from "./Components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (change) => {
    this.setState({
      task: change.target.value,
    });
  };

  onSubmitTask = (task) => {
    task.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter your task </label>
          <br />
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            value={this.state.task}
          />
          <br />
          <br />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
