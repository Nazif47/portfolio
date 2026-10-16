import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import SIHProject from './pages/projects/SIHProject';
import FinalYearProject from './pages/projects/FinalYearProject';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    filter: 'blur(6px)'
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.99,
    filter: 'blur(4px)',
    transition: {
      duration: 0.26,
      ease: [0.4, 0, 1, 1]
    }
  }
};

const PageTransition = ({ children }) => {
  const MotionContainer = motion.div;
  return (
    <MotionContainer
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow will-change-transform"
    >
      {children}
    </MotionContainer>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/projects/sih"
          element={
            <PageTransition>
              <SIHProject />
            </PageTransition>
          }
        />
        <Route
          path="/projects/final-year"
          element={
            <PageTransition>
              <FinalYearProject />
            </PageTransition>
          }
        />
        <Route
          path="/projects/navigation-aid"
          element={<Navigate to="/projects/final-year" replace />}
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <Experience />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-[100dvh] bg-zinc-950 text-zinc-400 relative overflow-hidden">
        <div className="bg-ambient"></div>
        <Navbar />
        <main className="flex flex-col flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}