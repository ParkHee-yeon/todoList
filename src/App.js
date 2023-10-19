import "./App.css";
import Header from "./component/Header";
import InputForm from "./component/InputForm";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readList } from "./redux/modules/todoReducer";
import { executeGet } from "./common";

function App() {
  // const todoArr = useSelector((state) => state.todoReducer.todoList);
  const [todoArr, setTodoArr] = useState([]);
  const dispatch = useDispatch();

  const loadData = () => {
    executeGet()
      .then((res) => setTodoArr(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  if (!todoArr) <></>;
  return (
    <>
      <BrowserRouter>
        <Header />
        <InputForm loadData={loadData} />
        <Routes>
          <Route
            path="/"
            element={<TodoList loadData={loadData} todoArr={todoArr} />}
          />
          <Route
            path="/clear"
            element={<TodoList loadData={loadData} todoArr={todoArr} />}
          />
          <Route
            path="/unclear"
            element={<TodoList loadData={loadData} todoArr={todoArr} />}
          />
        </Routes>
        <Footer loadData={loadData} todoArr={todoArr} />
      </BrowserRouter>
    </>
  );
}

export default App;
