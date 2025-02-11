import './App.css';
import { useRef } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Project';

function App() {
  const sectionsRef = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  // const scrollToSection = (section) => {
  //   sectionsRef[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  const scrollToSection = (section) => {
    const element = sectionsRef[section]?.current;
    if (element) {
      const offset = 50;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <div ref={sectionsRef.home}><Home /></div>
      <div ref={sectionsRef.about}><About /></div>
      <div ref={sectionsRef.projects}><Project /></div>
      <div ref={sectionsRef.contact}><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
