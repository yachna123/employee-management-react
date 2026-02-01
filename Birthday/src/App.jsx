import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QRCodePage from './components/QRCodePage';
import CountdownPage from './components/CountdownPage';
import BirthdayPage from './components/BirthdayPage';
import MemoriesPage from './components/MemoriesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QRCodePage />} />
        <Route path="/countdown" element={<CountdownPage />} />
        <Route path="/birthday" element={<BirthdayPage />} />
        <Route path="/memories" element={<MemoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
