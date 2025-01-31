import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WhyProtect from './pages/WhyProtect';
import DailyActions from './pages/DailyActions';
import News from './pages/News';
import Community from './pages/Community';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pourquoi" element={<WhyProtect />} />
            <Route path="/gestes" element={<DailyActions />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/communaute" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;