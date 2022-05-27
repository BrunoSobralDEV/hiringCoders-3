import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Repositories from './pages/Repositories';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route 
          path="/repositories" 
          element={<Repositories/>}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}