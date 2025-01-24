import React from "react";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default App;