import React from 'react';
import { Header } from '../components/Header';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from '../pages/Home';
import { Info } from '../pages/Info';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  )
}