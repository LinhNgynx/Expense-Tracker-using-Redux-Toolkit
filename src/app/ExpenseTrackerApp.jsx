import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Expense from '../componentRedux/ExpenseTracker/Expense';
import Income from '../componentRedux/ExpenseTracker/Income';
import Home from '../componentRedux/ExpenseTracker/Home';
import NavBar from '../componentRedux/ExpenseTracker/NavBar';

export default function ExpenseTrackerApp() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
}
