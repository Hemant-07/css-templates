import React from 'react';
import All from './All';
import Feat from './Feat';
import Docs from './Docs';
import { BrowserRouter , Routes, Route } from 'react-router-dom';


function Demo() {
  return (
    <div>
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<All />} />
        <Route  exact path="/features" element={<Feat />} />
        <Route  exact path="/docs" element={<Docs />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Demo
