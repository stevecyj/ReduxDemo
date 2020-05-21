import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" />
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
