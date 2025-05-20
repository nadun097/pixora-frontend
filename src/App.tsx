import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/Auth/Alert';
import AuthForm from "./components/Auth/AuthForm";

import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';

import Marketplace from "./pages/CollectionsPage/NftCollection";
import DigitalArts from "./pages/DigitalArtsPage/DigitalArtsCollection";
import Photographs from "./pages/PhotographsCollection/PhotographsCollection";
import LiveAuctions from  "./pages/LiveAuctionsPage/LiveAuctionsCollection";


function App() {
    // Store token in localStorage for persistence
    const [accessToken, setAccessToken] = useState<string | null>(
        () => localStorage.getItem('access_token')
    );
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const handleLoginClick = () => setIsAuthOpen(true);

    const handleLoginSuccess = (token: string) => {
        setAccessToken(token);
        localStorage.setItem('access_token', token);
        setIsAuthOpen(false);
    };

    const handleLogout = () => {
        setAccessToken(null);
        localStorage.removeItem('access_token');
    };

    return (
        <Router>
            <NavBar
                isLoggedIn={!!accessToken}
                onLoginClick={handleLoginClick}
                onLogout={handleLogout}
            />
            {isAuthOpen && (
                <AuthForm
                    onClose={() => setIsAuthOpen(false)}
                    onLoginSuccess={handleLoginSuccess}
                />
            )}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/digitalarts" element={<DigitalArts />} />
                <Route path={"/photographs"} element={<Photographs />} />
                <Route path={"/liveauctions"} element={<LiveAuctions />} />
            </Routes>
            <Alert />
        </Router>
    );


}

export default App;