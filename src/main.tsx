import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { Provider } from "react-redux";
import { store } from "./store/store.ts";

import { BrowserRouter } from "react-router-dom";

import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>  откл. на время разраб
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
