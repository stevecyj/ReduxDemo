import React from "react";
import { connect } from "react-redux";

//無狀態組件,因為會用到 props，所以傳遞 props 進來
const TodoList = (props) => {
  //用解構賦值簡化 this.props
  let { inputValue, inputChange, clickButton, list, deleteItem } = props;
  return (
    <div>
      <div>
        <input type="text" value={inputValue} onChange={inputChange} />
        <button onClick={clickButton}>送出</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                deleteItem(index);
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
};

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
