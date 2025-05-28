import React, { useState, useEffect } from 'react';
import Sidebar from "../../components/SideBar/Sidebar";
import VerificationRequestsList from "../../components/VerificationRequests/VerificationRequests";
import './AdminPage.css';

// Define the correct interface for VerificationRequest
interface VerificationRequest {
    id: string; // Backend ID type is string
    name: string;
    email: string;
    date: string;
    profilePicture: string;
    address: string;
    idFrontImage: string;
    idBackImage: string;
    aboutUserArticleLink: string;
}

const AdminPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('verification');
    const [requests, setRequests] = useState<VerificationRequest[]>([]);

    // Fetch pending requests dynamically
    useEffect(() => {
        const fetchPendingRequests = async () => {
            try {
                const response = await fetch('https://pixora-f96ef5c321f5.herokuapp.com/api/admin/pending-verification-requests');
                if (!response.ok) {
                    throw new Error('Failed to fetch pending requests');
                }
                const data: {
                    id: string;
                    user_name: string;
                    user_email: string;
                    request_date: string;
                    profile_image: string;
                    address: string;
                    id_front_image: string;
                    id_back_image: string;
                    about_user_article_link: string;
                }[] = await response.json();

                // Map API response to match the required structure
                const formattedRequests: VerificationRequest[] = data.map((request) => ({
                    id: request.id,
                    name: request.user_name,
                    email: request.user_email,
                    date: new Date(request.request_date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    }),
                    profilePicture: `data:image/jpeg;base64,${request.profile_image}`,
                    address: request.address,
                    idFrontImage: request.id_front_image,
                    idBackImage: request.id_back_image,
                    aboutUserArticleLink: request.about_user_article_link,
                }));

                setRequests(formattedRequests);
            } catch (error) {
                console.error('Error fetching pending requests:', error);
            }
        };

        fetchPendingRequests();
    }, []);

    const updateStatus = async (id: string, status: string) => {
        try {
            const response = await fetch(`https://pixora-f96ef5c321f5.herokuapp.com/api/admin/verification-requests/${id}/status?status=${status}`, {
                method: 'PUT',
            });

            if (!response.ok) {
                throw new Error(`Failed to update status for ID ${id}`);
            }

            // Remove the updated request from the list
            setRequests(requests.filter((request) => request.id !== id));
        } catch (error) {
            console.error(`Error updating status to ${status} for ID ${id}:`, error);
        }
    };

    const handleApprove = (id: string) => {
        updateStatus(id, 'approved');
    };

    const handleReject = (id: string) => {
        updateStatus(id, 'rejected');
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