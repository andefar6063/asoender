import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Hjem from './HjemPage';
import Kontakt from './KontaktPage';
import Essays from './EssayPage';
import EssayDetail from './EssayDetaljerPage';

import './styles/app.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/kommentarer" element={<Essays />} />
          <Route path="/kommentar/:id" element={<EssayDetail />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <footer className='app-footer'>
          <p>© 2024 Anton Sønderskov Kristensen. Alle rettigheder forbeholdes. Telefon: 20410319</p>
        </footer>
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className='app-navigation'>
      <ul className='app-navigation_list'>
        <li className='app-navigation_list_item'>
          <Link to="/">Hjem</Link>
        </li>
        <li className='app-navigation_list_item'>
          <Link to="/kommentarer">Kommentarer</Link>
        </li>
        <li className='app-navigation_list_item'>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;