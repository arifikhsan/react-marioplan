import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./components/store/reducer/root-reducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
