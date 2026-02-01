import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountdownPage from './components/CountdownPage';
import BirthdayPage from './components/BirthdayPage';
import MemoriesPage from './components/MemoriesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountdownPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
