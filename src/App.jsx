import './App.css';
import { useRef } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const sectionsRef = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionsRef[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div ref={sectionsRef.home}><Home /></div>
      <div ref={sectionsRef.projects}><Projects /></div>
      <div ref={sectionsRef.about}><About /></div>
      <div ref={sectionsRef.contact}><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
