import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from "./pages/ListPage.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<ListPage/>}/>
          <Route path="/articlePage" element={<ArticlePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
