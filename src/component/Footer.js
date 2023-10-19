import { useDispatch, useSelector } from "react-redux";
import { allDeleteList } from "../redux/modules/todoReducer";
import { todoPath } from "../common";
import axios from "../api/index";

const Footer = ({ loadData, todoArr }) => {
  // const dispatch = useDispatch();
  const todoDate = useSelector((state) => state.dateReducer.date);
  const filterItem = todoArr.filter((item) => item.date !== todoDate);

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

  const allDelFunc = () => {
    console.log("props[todoArr]:", todoArr);
    console.log("fiterItem", filterItem);
    // todoPath(filterItem).forEach((item) => {
    axios
      .put(`/data`, filterItem)
      .then((res) => loadData())
      .catch((error) => console.log(error));
    // });
  };

  return (
    <>
      <button
        className="allDelBtn"
        onClick={() => {
          // dispatch(allDeleteList());
          allDelFunc();
        }}
      >
        전체삭제
      </button>
    </>
  );
};
export default Footer;
