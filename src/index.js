import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./Sagas/saga";
import myReducer from "./Store/reducers";
import App from "./App";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
