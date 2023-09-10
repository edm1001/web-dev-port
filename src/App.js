import React from 'react';
import './App.css';
import Header from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import ResumePdf from './Pages/ResumePdf';

// add two pages: Home[age 

function App() {
  return (
    <>
    <Router>
    <Header/>
                <Routes>
                    <Route
                    path='/'
                    element={<Home/>}>
                    </Route>
                    <Route
                    path='/portfolio'
                    element={<Portfolio/>}>
                    </Route>
                    <Route
                    path='/ResumePdf'
                    element={<ResumePdf/>}>
                    </Route>
                </Routes>
    <Footer/>
            </Router>
    </>
      );
}

export default App;
