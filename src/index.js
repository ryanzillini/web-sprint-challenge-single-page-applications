import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="pizza" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
