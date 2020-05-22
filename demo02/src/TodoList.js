import React, { Component } from "react";
import store from "./store";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} />
          <button>送出</button>
        </div>
        <ul>
          <li>STE</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
