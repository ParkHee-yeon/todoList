import todoReducer from "./modules/todoReducer";
import dateReducer from "./modules/dateReducer";
import { combineReducers } from "redux";
// 리듀서 함수 정의
const rootReducer = combineReducers({
  todoReducer,
  dateReducer,
});
export default rootReducer;
