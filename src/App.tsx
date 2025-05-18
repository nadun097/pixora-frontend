import './App.css'
import Alert from './components/Auth/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketplace from "./pages/CollectionsPage/NftCollection.tsx";
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import DigitalArts from "./pages/DigitalArtsPage/DigitalArtsCollection.tsx";
import Photographs from "./pages/PhotographsCollection/PhotographsCollection.tsx";
function App() {
  return (
    <Router>
      <NavBar onLoginClick={() => {}} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/digitalatrs" element={<DigitalArts />} />
        <Route path="/photographs" element={<Photographs />} />
      </Routes>
      <Alert />
    </Router>
  );
}

export default App;
