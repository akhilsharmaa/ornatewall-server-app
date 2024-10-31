
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

// Importing Components
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          {/* Catch all other routes */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App
