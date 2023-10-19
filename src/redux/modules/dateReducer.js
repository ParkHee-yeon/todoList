import { transDate } from "../../common";

const UPDATE_DATE = "UPDATE_DATE";

const initialDate = {
  date: transDate(new Date()),
};

export const updateDate = (date) => {
  return {
    type: UPDATE_DATE,
    date,
  };
};

const dateReducer = (state = initialDate, action) => {
  switch (action.type) {
    case UPDATE_DATE:
      return {
        date: transDate(action.date),
      };
    default:
      return state;
  }
};

export default dateReducer;
