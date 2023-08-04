import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import { App } from './App'
import Movie from  './pages/Movie'
import Search from './pages/Search'
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = { < App />}>
          <Route path='/' element={< Home />} />
          <Route path='movie/:id' element={< Movie />} />
          <Route path='search' element={< Search />} />
          <Route path="/top" element={<TopRated/>} />
          <Route path="/upcoming" element={<UpComing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
