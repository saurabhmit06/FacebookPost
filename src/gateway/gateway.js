import axios from "axios";
var config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};
export function getPostList() {
  debugger;
  return axios.get("https://jsonplaceholder.typicode.com/posts", config);
}
