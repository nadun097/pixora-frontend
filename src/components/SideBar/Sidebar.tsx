import React from 'react';
import './Sidebar.css';

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    return (
        <div className="sidebar">
            <button
                className={`sidebar-button ${activeTab === 'verification' ? 'active' : ''}`}
                onClick={() => setActiveTab('verification')}
            >
                Verification Requests
            </button>
            <button
                className={`sidebar-button ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
            >
                User Management
            </button>
            <button
                className={`sidebar-button ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
            >
                Analytics Dashboard
            </button>
            <button
                className={`sidebar-button ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
            >
                System Settings
            </button>
        </div>
    );
};

export default Sidebar;