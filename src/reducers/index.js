export default function counter(
  state = { postList: [], commentList: [], selectedComment: [] },
  action
) {
  switch (action.type) {
    case "POST_LIST":
      return {
        postList: action.payload.postList,
        commentList: action.payload.commentList,
        userList: action.payload.userList
      };
    case "COMMNET_LIST":
      return {
        ...state,
        selectedComment: state.commentList.filter(
          item => item.postId === action.payload.postId
        )
      };

    default:
      return state;
  }
}
