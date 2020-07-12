import React from 'react';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Practitioner from './components/practitioner/Practitioner';
import Opinion from './components/opinion/Opinion';
import Hub from './components/hub/Hub';
import Footer from './components/footer/Footer';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Practitioner />
      <Opinion />
      <Hub />
      <Footer />
    </div>
  );
}

export default App;
