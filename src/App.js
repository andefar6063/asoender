import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SpinnerFullPage from "./components/spinner";
import Footer from "./components/footer";
import NavBar from "./components/nav";

const Root = lazy(() => import("./routes/root"));
const Kontakt = lazy(() => import("./routes/kontakt"));
const MultiKommentar = lazy(() => import("./routes/multikommentar"));
const SingleKommentar = lazy(() => import("./routes/singlekommentar"));

function App() {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/kommentarer" element={<MultiKommentar />} />
            <Route path="/kommentar/:id" element={<SingleKommentar />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
