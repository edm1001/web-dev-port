import React from 'react';
import './App.css';


import Welcome from './Components/Welcome/Welcome.js';
import Banner from './Components/Banner/Banner'
import About from './Components/About/About.js';
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects';
import Header from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Reviews from './Components/Reviews/Reviews';
import Footer from './Components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './Components/Projects/Portfolio';

function App() {
  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
    <Router>
                <Routes>
                    <Route
                    path='/portfolio'
                    element={<Portfolio/>}>
                    </Route>
                </Routes>
            </Router>
    <Welcome/>
    <Banner/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    <Reviews/>
    </main>
    <footer>
    <Footer/>
    </footer>
    </>
      );
}

export default App;
