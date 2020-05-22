import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.props.inputValue} />
          <button>送出</button>
        </div>
        <ul>
          <li>STE</li>
        </ul>
      </div>
    );
  }
}

// state, props映射關係
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
  };
};

export default connect(stateToProps, null)(TodoList);
