import * as React from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

function App() {
  return (
    <>
      <nav className="Navbar">
        <div className="Logo">Maths Magician</div>
        <div className="NavMenu">
          <Link to="/" className="Link">Home</Link>
          <Link to="/calculator" className="Link">Calculator</Link>
          <Link to="/quotes" className="Link">Quotes</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}
export default App;
