import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagaMonitor from "./sagaMonitor";

import PostList from "./components/PostList";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const action = (type, payload) => store.dispatch({ type, payload });

function render() {
  ReactDOM.render(
    <PostList action={action} />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
