import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com/";

export const getAllTodo = async () => {
  const { data } = await axios("1todos");
  return data;
};

// export const getAllTodo = (url) => {
//   return fetch(url).then((res) => res.json());
// };
