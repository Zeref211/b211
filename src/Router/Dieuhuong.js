import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Contact from "../Components/Contact";
import Chitiet from "../Components/Chitiet";
import Shop from "../Components/Shop";
import PageHome from "../Components/PageHome";


class Dieuhuong extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/chitiet" element={<Chitiet />}></Route>
          <Route path="/chi-tiet/:slug.:id" element={<Shop />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Dieuhuong;
