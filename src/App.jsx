import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Main1 from "./components/Main/Hero01";
import Main2 from "./components/Main/Hero02";
import Main3 from "./components/Main/Hero03";
import Main4 from "./components/Main/Hero04";
import Main5 from "./components/Main/Hero05";
import Main6 from "./components/Main/Hero06";
import Main7 from "./components/Main/Hero07";
import Main8 from "./components/Main/Hero08";
import Main9 from "./components/Main/Hero09";
import Main10 from "./components/Main/Hero10";
import FreeQuote from "./components/Pages/FreeQuote";
import CustomClearance from "./components/Pages/CustomClearance";
import FreightForwarding from "./components/Pages/FreightForwarding";
import LandFreight from "./components/Pages/LandFreight";
import Warehousing from "./components/Pages/Warehousing";
import LogisticsDesign from "./components/Pages/LogisticsDesign";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import AllBlog from "./components/Pages/AllBlogs";
import SingleBlog from "./components/Pages/SingleBlog";
import "./App.css";
import SignIn from "./components/Pages/SignIn";

function Home() {
  return (
    <div>
      <Main1 />
      <Main2 />
      <Main3 />
      {/* <Main4 /> */}
      <Main5 />
      <Main6 />
      <Main7 />
      <Main8 />
      <Main9 />
      <Main10 />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getafreequote" element={<FreeQuote />} />
        <Route path="/customclearance" element={<CustomClearance />} />
        <Route path="/freightforwarding" element={<FreightForwarding />} />
        <Route path="/landfreight" element={<LandFreight />} />
        <Route path="/warehousing" element={<Warehousing />} />
        <Route path="/logisticsdesign" element={<LogisticsDesign />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/allblogs" element={<AllBlog />} />
        <Route path="/blog/:postId" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
