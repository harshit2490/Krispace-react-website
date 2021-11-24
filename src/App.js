import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>

        <HeroSection />
        <Routes>
          <Route path='/hero-container' component={HeroSection}/>
        </Routes>

        <Cards />
        <Routes>
          <Route path='/cards' component={Cards}/>
        </Routes>

        <Footer />
        <Routes>
          <Route path='/footer-container' component={Footer}/>
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
