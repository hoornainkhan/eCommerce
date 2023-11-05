import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"; // Replace redirect with Outlet
import Accessories from "../src/categories/accessories"
import Home from "./COMPONENTS/home";
import All from "../src/categories/All"
import Mfas from "../src/categories/mfas";
import Wfas from "./categories/wfas";
import ProductInfo from './categories/ProductInfo'; // Uncomment this line to import ProductInfo
import Navbar from './COMPONENTS/Navbar';

function Approuter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/All" element={<All/>}/>
        <Route path="/Mfas" element={<Mfas />} />
        <Route path="/Wfas" element={<Wfas />} />
        <Route path="/Accessories" element={<Accessories/>} />
        <Route path="/product/:id" element={<ProductInfo />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  )
}

export default Approuter;
