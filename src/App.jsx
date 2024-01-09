import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import Detail from "./pages/Detail";
import AddPage from "./pages/AddPage";
import "./index.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} /> 
            <Route path="/add-page" element={<AddPage />} /> 
            <Route path="/detail/:id" element={<Detail />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
