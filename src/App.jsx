import { BrowserRouter as Router, Routes, Route } from 'react-router';
import ThemeSwitch from './ThemeSwitch';
import Benchmark from './Benchmark';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeSwitch />} />
        <Route path="/benchmark" element={<Benchmark />} />
      </Routes>
    </Router>
  );
}

export default App;