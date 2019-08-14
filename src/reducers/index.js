export default function counter(state = { postList: [] }, action) {
  switch (action.type) {
    case "POST_LIST":
      return {
        postList: [...state.postList]
      };
    case "INCREMENT_IF_ODD":
      return state % 2 !== 0 ? state + 1 : state;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
