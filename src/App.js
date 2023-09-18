import React from "react";
import Header from "./comonents/Header";
import "./App.css";
import Sidebar from "./comonents/Sidebar";
import RecommendedVideos from "./comonents/RecommendedVideos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchVideos from "./comonents/SearchVideos";


function App() {
  return (
    <Router basename="">
      <Header />
      
    
      <Routes>
        <Route
          path="/"
          element={
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          }
        ></Route>
        <Route
          path="/Search/:search"
          element={
            <div className="app__page">
              <Sidebar/>
              <SearchVideos/>
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
