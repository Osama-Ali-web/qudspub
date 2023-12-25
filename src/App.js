import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";


import  {Mainpage}  from "./Components/Section/MainPage";
import  {Home}  from "./Components/Home Page/Home";
import  {Service}  from "./Components/Service/Service";
import  {Team}  from "./Components/Team/Team";
import  {Project}  from "./Components/Project/Project";
import  {Events}  from "./Components/Team/Events";
import  {Collaboratives}  from "./Components/Team/Collaboratives";
import  {About}  from "./Components/About/About";
import  {Contact}  from "./Components/Contact/Contact";
import {Faqs} from './Privacy/Faqs';
import {Policy} from './Privacy/Policy';
import {Terms} from './Privacy/Terms';
import {Blog} from './Privacy/Blog';



function App() {
  return (

      <BrowserRouter>
        <Nav />
        <div className="page">
          <Routes>
            <Route path="/main" exact element={<Mainpage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/team" element={<Team />} />
            <Route path="/collaboratives" element={<Collaboratives />} />
            <Route path="/ُevents" element={<Events />} />
            <Route path="/project" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/Policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
        
  );
}

export default App;
