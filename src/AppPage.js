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
        <footer className="text-center text-sm font-medium uppercase bg-gradient-to-r from-blue-500 to-blue-700 text-white p-5">
          <p>© 2024 Anton Sønderskov Kristensen. Alle rettigheder forbeholdes. Telefon: 20410319</p>
        </footer>
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
          <li className="list-none">
            <Link className="block px-5 py-2 text-sm font-medium uppercase transition-transform transform rounded-md hover:bg-blue-600 hover:scale-105" to="/">Hjem</Link>
          </li>
          <li className="list-none">
            <Link className="block px-5 py-2 text-sm font-medium uppercase transition-transform transform rounded-md hover:bg-blue-600 hover:scale-105" to="/kommentarer">Kommentarer</Link>
          </li>
          <li className="list-none">
            <Link className="block px-5 py-2 text-sm font-medium uppercase transition-transform transform rounded-md hover:bg-blue-600 hover:scale-105" to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default App;
