import React from "react";
import HomePage from "./pages/Home";
import Details from "./pages/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="React_Dashboard_with_API_Search_and_Sorting">
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
