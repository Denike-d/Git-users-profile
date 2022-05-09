import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./component/HomePage";
import ProfileDisplay from "./component/ProfileDisplay";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfileDisplay />} />
      </Route>
      {/*<Route path="/git" element={<GithubInfo />} />*/}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
