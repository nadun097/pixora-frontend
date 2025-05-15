import './App.css'
import Alert from './components/Auth/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketplace from "./pages/CollectionsPage/NftCollection.tsx";
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <NavBar>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<Marketplace />} /></NavBar>
      </Routes>
      <Alert />
    </Router>
  );
}

export default App;
