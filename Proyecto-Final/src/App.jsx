import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from './Pages/LoginPage'; 
import CardContainer from "./Utils/CardContainer";
import Sidebar from "./Components/sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage/>} path="/" exact />
        <Route element={<CardContainer />} path="/games" exact />
      </Routes>
    </BrowserRouter>
  );
}