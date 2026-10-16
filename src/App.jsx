import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SIHProject from './pages/projects/SIHProject';
import FinalYearProject from './pages/projects/FinalYearProject';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-[100dvh] bg-zinc-950 text-zinc-400 relative overflow-hidden">
        <div className="bg-ambient"></div>
        <Navbar />
        <main className="flex flex-col flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/sih" element={<SIHProject />} />
            <Route path="/projects/final-year" element={<FinalYearProject />} />
            <Route path="/projects/navigation-aid" element={<Navigate to="/projects/final-year" replace />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}