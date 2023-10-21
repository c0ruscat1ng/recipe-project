import React from 'react'
import Header from './components/header/Header.jsx'
import CategoryList from './components/Food/CategoryList/CategoryList.jsx'
import MeatList from "./components/Food/MeatList/MeatList.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Recipe from "./components/Recipe/Recipe.jsx";
import ScrollToTop from "./utils/scrollToTop.js";
import About from "./pages/About/About.jsx";
import Information from "./pages/Information/Information.jsx";

function App() {

    return (
        <Router>
            <ScrollToTop/>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categories" element={<CategoryList/>}/>
                    <Route path="/category/:name" element={<MeatList/>}/>
                    <Route path="/category/:name/meal/:id" element={<Recipe/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/information" element={<Information/>}/>
                </Routes>
            </div>
            <Footer/>
        </Router>

    )
}

export default App
