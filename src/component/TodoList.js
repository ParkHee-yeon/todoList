import { useSelector, useDispatch } from "react-redux";
import { readList, clearList, deleteList } from "../redux/modules/todoReducer";
import { todoPath, executePatch, executeDelete } from "../common";
const TodoList = ({ loadData, todoArr }) => {
  const todoDate = useSelector((state) => state.dateReducer.date);
  // const todoArr = useSelector((state) => state.todoReducer.todoList);
  // const dispatch = useDispatch();
  const filterItem = todoArr.filter((item) => item.date === todoDate);

  /*
  const todoPath = () => {
    switch (window.location.pathname) {
      case "/":
        return filterItem;
      case "/clear":
        return filterItem.filter((item) => item.checked === true);
      case "/unclear":
        return filterItem.filter((item) => item.checked === false);
    }
  };
  */

  const upDateDataFunc = (id, isChecked) => {
    executePatch(id, !isChecked)
      .then((res) => {
        loadData();
      })
      .catch((error) => console.log(error));
  };

  const delDataFunc = (id) => {
    executeDelete(id)
      .then((res) => loadData())
      .catch((error) => console.log(error));
  };

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {todoPath(filterItem).map((item) => {
          return (
            <li
              key={item.id}
              style={
                item.checked
                  ? { textDecorationLine: "line-through" }
                  : { textDecorationLine: "" }
              }
            >
              <input
                type="checkBox"
                onClick={() => {
                  // dispatch(clearList(item.id));
                  upDateDataFunc(item.id, item.checked);
                }}
                checked={item.checked}
                readOnly
              />
              <label>{item.name}</label>
              <button
                className="delBtn"
                onClick={() => {
                  // dispatch(deleteList(item.id));
                  delDataFunc(item.id);
                }}
              >
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoList;
