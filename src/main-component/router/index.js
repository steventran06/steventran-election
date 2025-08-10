import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage';
import VisionPage from '../VisionPage/VisionPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="vision" element={<VisionPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
