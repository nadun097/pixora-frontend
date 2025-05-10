import React, { useState } from 'react';
import Sidebar from "../../components/SideBar/Sidebar";
import VerificationRequestsList from "../../components/VerificationRequests/VerificationRequests";
import './AdminPage.css';

const AdminPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('verification');
    const [requests, setRequests] = useState([
        {
            id: 1,
            name: 'Devon Friczy',
            email: 'devonfriczy03@gmail.com',
            date: '2025 MAR 1',
            profilePicture: 'src/assets/images/img1.jpg',
        },
        {
            id: 2,
            name: 'Lisa Miyar',
            email: 'lisakuppermiyar@gmail.com',
            date: '2025 MAR 2',
            profilePicture: 'src/assets/images/monkey.png',
        },
        {
            id: 3,
            name: 'Devon Friczy',
            email: 'devonfriczy03@gmail.com',
            date: '2025 MAR 1',
            profilePicture: 'src/assets/images/img1.jpg',
        },
        {
            id: 4,
            name: 'Lisa Miyar',
            email: 'lisakuppermiyar@gmail.com',
            date: '2025 MAR 2',
            profilePicture: 'src/assets/images/monkey.png',
        },
        {
            id: 5,
            name: 'Lisa Miyar',
            email: 'lisakuppermiyar@gmail.com',
            date: '2025 MAR 2',
            profilePicture: 'src/assets/images/monkey.png',
        }
        // ... other requests
    ]);

    const handleApprove = (id: number) => {
        setRequests(requests.filter((request) => request.id !== id));
    };

    const handleReject = (id: number) => {
        setRequests(requests.filter((request) => request.id !== id));
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'verification':
                return (
                    <>
                        <h1>Verification Requests</h1>
                        <VerificationRequestsList
                            requests={requests}
                            onApprove={handleApprove}
                            onReject={handleReject}
                        />
                    </>
                );
            case 'users':
                return <h1>User Management Dashboard</h1>;
            case 'analytics':
                return <h1>Analytics Dashboard</h1>;
            case 'settings':
                return <h1>System Settings</h1>;
            default:
                return <h1>Welcome to Admin Panel</h1>;
        }
    };

    return (
        <div className="verification-requests-page">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="main-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminPage;