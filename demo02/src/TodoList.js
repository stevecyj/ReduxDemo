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
          <button onClick={this.props.clickButton}>送出</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.props.deleteItem(index);
                  // console.log("12345");
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// state, props映射關係
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
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
    clickButton() {
      // console.log("12345");
      let action = { type: "add_item" }; //不給值，從 reducer 裡拿值
      dispatch(action);
    },
    deleteItem(index) {
      // console.log(index);
      let action = { type: "delete_item", index };
      dispatch(action);
    },
  };
};

export default connect(stateToProps, dispatchToProps)(TodoList);
