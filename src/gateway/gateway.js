import axios from "axios";
var config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};
export function getPostList() {
  return axios.get("https://jsonplaceholder.typicode.com/posts", config);
}
export function getUserList() {
  return axios.get("https://jsonplaceholder.typicode.com/users", config);
}

export function getComment(postid) {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postid}/comments`,
    config
  );
}
