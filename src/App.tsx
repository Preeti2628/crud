import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Add from "./pages/Add";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/home" element={<Home />} />
        <Route  path="/add" element={<Add  />} />
        <Route  path="/edit" element={<Edit />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
