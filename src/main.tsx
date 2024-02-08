import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { BrowserRouter } from "react-router-dom";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>  откл. на время разраб
  <BrowserRouter>
    {/* Redux  если потреб. то добовлять сюда */}
    <App />
    {/* Redux */}
  </BrowserRouter>
  // </React.StrictMode>
);
