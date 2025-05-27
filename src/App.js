import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PoliticasList from './components/PoliticasList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PoliticasList />} />
      </Routes>
    </Router>
  );
}

export default App;
