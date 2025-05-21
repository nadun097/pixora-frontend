import React, { useState } from 'react';
import './App.css';
import Alert from './components/Auth/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketplace from "./pages/CollectionsPage/NftCollection";
import HomePage from './pages/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import Photographs from "./pages/PhotographsCollection/PhotographsCollection.tsx";
import DigitalArts from "./pages/DigitalArtsPage/DigitalArtsCollection";
import AuthForm from "./components/Auth/AuthForm";
import NftDataView from './pages/NftDataView/NftDataView';
import UserAccount from './pages/UserAccount/UserAccount.tsx';
import Photographs from "./pages/PhotographsCollection/PhotographsCollection";
import LiveAuctions from  "./pages/LiveAuctionsPage/LiveAuctionsCollection";
import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage.tsx";


function App() {
    
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
           
            {(
                <NavBar
                    isLoggedIn={!!accessToken}
                    onLoginClick={handleLoginClick}
                    onLogout={handleLogout}
                />
            )}
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
                <Route path="/nft/:id" element={<NftDataView />} />
                <Route path="/userAccount" element={<UserAccount />} />
                <Route path={"/photographs"} element={<Photographs />} />
                <Route path={"/liveauctions"} element={<LiveAuctions />} />
                <Route path="/dashboard" element={<UserDashboardPage />} />
            </Routes>
            <Alert />
        </Router>
    );


}

export default App;