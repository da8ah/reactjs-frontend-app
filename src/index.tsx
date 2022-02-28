import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

import "bootswatch/dist/pulse/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import 'animate.css/animate.min.css';
import "./index.css";

import Navbar from "./components/Navbar/Navbar";
import VideoList from "./components/Videos/VideoList";
import VideoForm from "./components/Videos/VideoForm";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <div className="container p-4">
        <Routes>
          <Route path={"/"} element={<VideoList />} />
          <Route path={"/videos"} element={<VideoList />} />
          <Route path="/new-video" element={<VideoForm />} />
          <Route path="/update/:id" element={<VideoForm />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
