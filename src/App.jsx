import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar'; // Correct path to Navbar component
import Home from './pages/Home/Home'; // Correct path to Home component
import ResearchDoubts from './pages/ABC/ResearchDoubts'; // Correct path to ResearchDoubts

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research-doubts" element={<ResearchDoubts />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;


