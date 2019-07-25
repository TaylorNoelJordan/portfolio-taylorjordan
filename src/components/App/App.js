import React from 'react';
import NavBar from '../NavBar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
// import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <main className='App'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Blog /> */}
      <Contact />
      </main>
    );
  }
}

export default App;
