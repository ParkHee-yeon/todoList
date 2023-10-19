import axios from "../api/index";
// 날짜 변환
export const transDate = (selDate) => {
  const year = selDate.getFullYear();
  const month = selDate.getMonth() + 1;
  const day = selDate.getDate();
  return `${year}-${month >= 10 ? month : "0" + month}-${
    day >= 10 ? day : "0" + day
  }`;
};

export const todoPath = (list) => {
  switch (window.location.pathname) {
    case "/":
      return list;
    case "/clear":
      return list.filter((item) => item.checked === true);
    case "/unclear":
      return list.filter((item) => item.checked === false);
  }
};

export const executeGet = () => {
  return axios.get("/data");
};

export const executePost = (obj) => {
  return axios.post("/data", obj);
};

export const executePatch = (id, isChecked) => {
  return axios.patch(`/data/${id}`, {
    checked: isChecked,
  });
};

export const executeDelete = (id) => {
  return axios.delete(`/data/${id}`);
};
