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
          <input
            type="text"
            value={this.props.inputValue}
            onChange={this.props.inputChange}
          />
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

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      // console.log(e.target.value);
      //派發到 reducer 裡
      let action = {
        type: "change_input",
        value: e.target.value,
      };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
