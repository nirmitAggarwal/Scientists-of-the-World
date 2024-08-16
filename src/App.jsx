import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import IsaacNewton from './components/categories/Physics/IsaacNewton';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div className="min-h-screen bg-gray-50">
        <nav className="p-4 bg-gray-800 text-white">
          <ul className="flex space-x-4">
            <li><Link to="/physics">Physics</Link></li>
            <li><Link to="/chemistry">Chemistry</Link></li>
            <li><Link to="/mathematics">Mathematics</Link></li>
            <li><Link to="/geology">Geology</Link></li>
            <li><Link to="/computer-science">Computer Science</Link></li>
          </ul>
        </nav>
        <Routes>
           <Route path="/physics/isaac-newton" element={<IsaacNewton />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
