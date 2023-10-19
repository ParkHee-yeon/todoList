import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToList } from "../redux/modules/todoReducer";
import { updateDate } from "../redux/modules/dateReducer";
import { transDate, executePost } from "../common";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale"; //한국어 설정

const InputForm = ({ loadData }) => {
  const dispatch = useDispatch();
  const [todoDate, setInputDate] = useState(new Date());
  const [inputText, setInputText] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const addData = (text, date) => {
    if (text === "") return;
    const obj = {
      name: text,
      id: new Date().getTime(),
      checked: false,
      date: transDate(date),
    };

    executePost(obj)
      .then((res) => {
        console.log("res", res);
        loadData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // dispatch(addToList(inputText, todoDate));
          addData(inputText, todoDate);
          setInputText("");
        }}
      >
        <label>일정</label>
        <DatePicker
          className="todoDate"
          locale={ko}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          selected={todoDate}
          onChange={(date) => {
            setInputDate(date);
            dispatch(updateDate(date));
          }}
          closeOnScroll={true}
        />
        <input
          type="text"
          placeholder="입력하세요"
          onChange={onChange}
          value={inputText}
          className="inputText"
        />
        <button className="addBtn">등록</button>
      </form>
    </>
  );
};
export default InputForm;
