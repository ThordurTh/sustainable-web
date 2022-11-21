import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/header.scss";
import "./styles/info.scss";
import "./styles/inout.scss";
import "./styles/news.scss";
import "./styles/footer.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
