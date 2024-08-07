import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/Header/NavBar";
import Admin from "./components/Admin/Admin";
import AdminBlogPostAllowance from "./components/Pages/Blog/AdminBlogPostAllowance";
import AdminCareerPostAllowance from "./components/Pages/Careers/AdminCareerPostAllowance";
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
import FreeQuote from "./components/Pages/FreeQuote/FreeQuote";
import CustomClearance from "./components/Pages/Services/CustomClearance";
import FreightForwarding from "./components/Pages/Services/FreightForwarding";
import LandFreight from "./components/Pages/Services/LandFreight";
import Warehousing from "./components/Pages/Services/Warehousing";
import LogisticsDesign from "./components/Pages/Services/LogisticsDesign";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import AllBlog from "./components/Pages/Blog/AllBlogs";
import SingleBlog from "./components/Pages/Blog/SingleBlog";
import "./App.css";
import SignIn from "./components/Pages/UserAuthentication/SignIn";
import Career from "./components/Pages/Careers/Career";
import UserCareerInputField from "./components/Pages/Careers/UserInputCareerField";
import AllApplicants from "./components/Pages/Careers/ViewApplicants";
import ApplicantDetails from "./components/Pages/Careers/ApplicantDetail";
import JobDetails from "./components/Pages/Careers/JobDetails";

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
        <Route path="/adminblogpostallowance" element={<AdminBlogPostAllowance />} />
        <Route path="/admincareerpostallowance" element={<AdminCareerPostAllowance />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/allblogs" element={<AllBlog />} />
        <Route path="/blog/:postId" element={<SingleBlog />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/careerinputfield" element={<UserCareerInputField />} />
        <Route path="/allapplicants" element={<AllApplicants />} />
        <Route path="/applicantDetail" element={<ApplicantDetails />} />
        <Route path="/jobdetails/:jobId" element={<JobDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
