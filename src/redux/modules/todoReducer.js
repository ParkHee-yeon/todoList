import { useFetcher } from "react-router-dom";
import { transDate } from "../../common";
import axios from "axios";
// 액션 타입 정의
const READ_LIST = "READ_LIST";
const ADD_TO_LIST = "ADD_TO_LIST";
const CLEAR = "CLEAR";
const DELETE = "DELETE";
const ALL_DELETE = "ALL_DELETE";

// 초기값 정의
const initialState = {
  todoList: [],
};

/* 리덕스
export const readList = (data) => {
  return {
    type: READ_LIST,
    data,
  };
};

export const addToList = (text, date) => {
  if (text === "") return;
  const obj = {
    name: text,
    checked: false,
    id: new Date().getTime(),
    date: transDate(date),
  };
  return {
    type: ADD_TO_LIST,
    item: {
      name: obj.name,
      id: obj.id,
      checked: obj.checked,
      date: obj.date,
    },
  };
};

export const clearList = (id) => {
  return {
    type: CLEAR,
    id,
  };
};

export const deleteList = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const allDeleteList = () => {
  return {
    type: ALL_DELETE,
  };
};
*/

// 액션 함수 정의(axios)
export const readList = (data) => {
  return {
    type: READ_LIST,
    data,
  };
};
export const addToList = (data) => {
  return {
    type: ADD_TO_LIST,
    data,
  };
};

export const clearList = (data) => {
  return {
    type: CLEAR,
    data,
  };
};

export const deleteList = (id) => {
  return {
    type: DELETE,
    id,
  };
};

export const allDeleteList = () => {
  return {
    type: ALL_DELETE,
  };
};

// 리스트 생성/삭제/수정 액션 리듀서 함수 (axios 이용)
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_LIST:
      // const readList = localStorage.getItem("todoList");
      return {
        // todoList: readList ? JSON.parse(readList) : state.todoList,
        todoList: action.data ? action.data : state.todoList,
      };
    case ADD_TO_LIST:
      console.log("ADD_TO_LIST action", action);
      // const addList = [action.item, ...state.todoList];
      // localStorage.setItem("todoList", JSON.stringify(addList));
      return {
        // todoList: addList,
        todoList: [action.data, ...state.todoList],
      };
    case CLEAR:
      console.log("CLEAR action", action);
      const updateList = [
        ...state.todoList.filter((item) => {
          if (item.id === action.data.id) {
            item.checked = !item.checked;
          }
          return item;
        }),
      ];
      return {
        todoList: updateList,
      };
    /*
      const clearList = [
        ...state.todoList.filter((item) => {
          if (item.id === action.id) {
            item.checked = !item.checked;
          }
          return item;
        }),
      ];
      localStorage.setItem("todoList", JSON.stringify(clearList));
      return {
        todoList: clearList,
      };
      */
    case DELETE:
      console.log("DELETE action", action);
      const delList = [
        ...state.todoList.filter((item) => item.id !== action.id),
      ];
      return {
        todoList: delList,
      };
    /*
      const delList = [
        ...state.todoList.filter((item) => item.id !== action.id),
      ];
      localStorage.setItem("todoList", JSON.stringify(delList));
      return {
        todoList: delList,
      };
      */

    case ALL_DELETE:
      console.log("ALL_DELETE action", action);
      localStorage.setItem("todoList", JSON.stringify([]));
      return {
        todoList: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
