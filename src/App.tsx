import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';
import Insurance from './pages/Insurance';
import Healthcare from './pages/Healthcare';
import Government from './pages/Government';
import RealEstate from './pages/RealEstate';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/government" element={<Government />} />
            <Route path="/real-estate" element={<RealEstate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
