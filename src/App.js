import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Redirector from './Redirector';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Redirector />} />
      </Routes>
    </Router>
  );
};

export default App;