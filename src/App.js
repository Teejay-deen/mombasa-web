import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Travel from './components/Travel';
import Boat from './components/Boat';


function App() {
  return(
    <div>
      <Hero />
      <Travel title="Underwater Adventure" price="N45,000" hour="16 hrs"  />
      <Travel title="Underwater Adventure" price="N45,000" hour="16 hrs"  />
      <Travel title="Underwater Adventure" price="N45,000" hour="16 hrs"  />
      <Travel title="Underwater Adventure" price="N45,000" hour="16 hrs"  />

      <Boat />
    </div>
    
  )
    
}

export default App;
