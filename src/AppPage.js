import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Hjem from './HjemPage';
import Kontakt from './KontaktPage';
import Essays from './EssayPage';
import EssayDetail from './EssayDetaljerPage';

function App() {
  return (
    <Router>
      <div className='bg-bg'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hjem />} />
          <Route path="/kommentarer" element={<Essays />} />
          <Route path="/kommentar/:id" element={<EssayDetail />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
        <footer className="text-center text-sm font-medium uppercase">
          <p>© 2024 Anton Sønderskov Kristensen. Alle rettigheder forbeholdes. Telefon: 20410319</p>
        </footer>
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className="flex justify-center p-5 rounded-lg backdrop-blur bg-bg">
      <ul className="flex flex-col gap-4 md:flex-row md:gap-2">
        <li className="list-none">
          <Link className="block px-5 py-2 text-center text-sm font-medium uppercase transition-colors rounded-md hover:bg-blue-100" to="/">Hjem</Link>
        </li>
        <li className="list-none">
          <Link className="block px-5 py-2 text-center text-sm font-medium uppercase transition-colors rounded-md hover:bg-blue-100" to="/kommentarer">Kommentarer</Link>
        </li>
        <li className="list-none">
          <Link className="block px-5 py-2 text-center text-sm font-medium uppercase transition-colors rounded-md hover:bg-blue-100" to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
